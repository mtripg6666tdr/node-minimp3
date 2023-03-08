// @ts-check
const minimp3 = require('bindings')('minimp3')
const { Transform } = require('stream')

class Decoder extends Transform {
  /**
   * @param {Buffer} chunk
   * @param {string|undefined} _
   * @param {() => void} processed
   */
  _transform (chunk, _, processed) {
    const decodedBuffer = minimp3.decodeBuffer(chunk, chunk.length)

    if (decodedBuffer.length > 0) this.push(decodedBuffer)

    processed()
  }
}

module.exports = Decoder
