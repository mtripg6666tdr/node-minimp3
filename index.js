// @ts-check
const minimp3 = require('bindings')('minimp3')
const { Transform } = require('stream')

class Decoder extends Transform {
  /** @type {import('stream').TransformOptions & {maximumChunkLength: number}} */
  constructor(options = {}){
    super(options);
    this.maximumChunkLength = options.maximumChunkLength || 100000000;
    /** @type {number} */
    this.bitrate = 0;
    /** @type {number} */
    this.channels = -1;
    /** @type {number} */
    this.samplingRate = -1;
  }

  /**
   * @param {Buffer} chunk
   * @param {string|undefined} _
   * @param {() => void} callback
   */
  _transform (chunk, _, callback) {
    /** @type {Buffer[]} */
    const buffers = [];

    if(chunk.length < this.maximumChunkLength){
      buffers.push(chunk);
    }else{
      const chunkLength = Math.ceil(chunk.length / this.maximumChunkLength);
      for(let i = 0; i < chunkLength; i++){
        buffers.push(chunk.subarray(i * this.maximumChunkLength, (i + 1) * this.maximumChunkLength - 1));
      }
    }

    /** @type {{buffer: Buffer, bitrate: number, channels: number, samplingRate: number}} */
    const {
      buffer: decodedBuffer,
      bitrate,
      channels,
      samplingRate,
    } = minimp3.decodeBuffer(chunk, chunk.length);

    if(this.bitrate !== bitrate){
      this.emit("bitrateChanged", this.bitrate = bitrate);
    }
    if(this.channels < 0){
      this.emit("channelData", this.channels = channels);
    }
    if(this.samplingRate < 0){
      this.emit("samplingRateData", this.samplingRate = samplingRate);
    }

    if (decodedBuffer.length > 0){
      this.push(decodedBuffer);
    }

    callback();
  }
}

module.exports = Decoder
