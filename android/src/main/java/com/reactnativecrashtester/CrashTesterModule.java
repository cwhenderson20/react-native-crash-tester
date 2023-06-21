package com.reactnativecrashtester;

import android.os.Handler;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = CrashTesterModule.NAME)
public class CrashTesterModule extends ReactContextBaseJavaModule {
    public static final String NAME = "CrashTester";

    public CrashTesterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void nativeCrash(String message) {
        new Handler().postDelayed(() -> {
          if (message.isEmpty()) {
            throw new RuntimeException();
          }
          throw new RuntimeException(message);
        }, 50);
    }

    @ReactMethod
    public void nativeException(String message) {
        new Handler().postDelayed(() -> {
          if (message.isEmpty()) {
            throw new RuntimeException();
          }
          throw new RuntimeException(message);
        }, 50);
    }
}
