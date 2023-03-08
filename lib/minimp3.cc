#define MINIMP3_IMPLEMENTATION

#include "minimp3_ex.h"
#include <napi.h>

Napi::Value DecodeBuffer(const Napi::CallbackInfo &info) {
  uint8_t *buf = info[0].As<Napi::Buffer<uint8_t>>().Data();
  int buf_size = info[1].As<Napi::Number>().Int32Value();
  mp3dec_t mp3d;
  mp3dec_file_info_t f_info;

  mp3dec_load_buf(&mp3d, buf, buf_size, &f_info, 0, 0);

  Napi::Env env = info.Env();
  Napi::Object result = Napi::Object::New(info.Env());
  result.Set(
    Napi::String::New(env, "bitrate"),
    f_info.avg_bitrate_kbps
  );
  result.Set(
    Napi::String::New(env, "channels"),
    f_info.channels
  );
  result.Set(
    Napi::String::New(env, "samplingRate"),
    f_info.hz
  );
  result.Set(
    Napi::String::New(env, "buffer"),
    Napi::Buffer<mp3d_sample_t>::New(
      info.Env(),
      f_info.buffer,
      f_info.samples - sizeof(mp3d_sample_t)
    )
  );
  return result;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(
    Napi::String::New(env, "decodeBuffer"),
    Napi::Function::New(env, DecodeBuffer)
  );
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init);
