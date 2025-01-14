declare module "@mtripg6666tdr/minimp3" {
  import { Transform } from "stream";
  class Decoder extends Transform {
    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: any) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "pause", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "resume", listener: () => void): this;
    addListener(event: "bitrateChanged", listener: (bitrate: number) => void): this;
    addListener(event: "channelData", listener: (channels: number) => void): this;
    addListener(event: "samplingRateData", listener: (samplingRate: number) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "pause", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "resume", listener: () => void): this;
    on(event: "bitrateChanged", listener: (bitrate: number) => void): this;
    on(event: "channelData", listener: (channels: number) => void): this;
    on(event: "samplingRateData", listener: (samplingRate: number) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: any) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "pause", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "resume", listener: () => void): this;
    once(event: "bitrateChanged", listener: (bitrate: number) => void): this;
    once(event: "channelData", listener: (channels: number) => void): this;
    once(event: "samplingRateData", listener: (samplingRate: number) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    off(event: "close", listener: () => void): this;
    off(event: "data", listener: (chunk: any) => void): this;
    off(event: "end", listener: () => void): this;
    off(event: "error", listener: (err: Error) => void): this;
    off(event: "pause", listener: () => void): this;
    off(event: "readable", listener: () => void): this;
    off(event: "resume", listener: () => void): this;
    off(event: "bitrateChanged", listener: (bitrate: number) => void): this;
    off(event: "channelData", listener: (channels: number) => void): this;
    off(event: "samplingRateData", listener: (samplingRate) => void): this;
    off(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: any) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "pause", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "resume", listener: () => void): this;
    removeListener(event: "bitrateChanged", listener: (bitrate: number) => void): this;
    removeListener(event: "channelData", listener: (channels: number) => void): this;
    removeListener(event: "samplingRateData", listener: (samplingRate: number) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event: "close"): this;
    removeAllListeners(event: "data"): this;
    removeAllListeners(event: "end"): this;
    removeAllListeners(event: "error"): this;
    removeAllListeners(event: "pause"): this;
    removeAllListeners(event: "readable"): this;
    removeAllListeners(event: "resume"): this;
    removeAllListeners(event: "bitrateChanged"): this;
    removeAllListeners(event: "channelData"): this;
    removeAllListeners(event: "samplingRateData"): this;
    removeAllListeners(event?: string | symbol | undefined): this;
  }
  export = Decoder;
}
