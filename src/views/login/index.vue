<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>优秀橙 Admin</h1>
        <t-form
          ref="form"
          :colon="true"
          :label-width="0"
          class="login-form"
          :data="loginForm"
          :rules="rules"
          @submit="loginHandle"
        >
          <t-form-item name="userName">
            <t-input
              clearable
              placeholder="请输入用户名"
              v-model="loginForm.userName"
            >
              <template #prefix-icon>
                <icon name="desktop" />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input
              type="password"
              clearable
              placeholder="请输入密码"
              v-model="loginForm.password"
            >
              <template #prefix-icon>
                <icon name="lock-on" />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" block :loading="loading"
              >登录</t-button
            >
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "tdesign-vue-next";
import type { SubmitContext } from "tdesign-vue-next";
import { reactive, ref } from "vue";

import { useAppStore } from "../../store";

import { useRouter } from "vue-router";
import { MessagePlugin } from "tdesign-vue-next";

import type { LoginType } from "@/type/loginType";

const loginForm = reactive<LoginType>({
  userName: "",
  password: "",
});
const rules = {
  userName: [{ required: true, message: "请输入用户名" }],
  password: [{ required: true, message: "请输入密码" }],
};

const appStore = useAppStore();
const loading = ref(false);
const router = useRouter();
const loginHandle = async ({ validateResult }: SubmitContext) => {
  if (validateResult !== true) {
    return;
  }
  loading.value = true;
  try {
    await appStore.login(loginForm);
    await MessagePlugin.success("登陆成功");
    await router.push({ name: "dashboard" });
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 400px;

    h1 {
      text-align: center;
    }

    .login-form {
      margin: 20px 0;
    }
  }
}
</style>
