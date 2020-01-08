<template>
  <div id="app">
    <v-app id="overlay">
      <v-content>
        <span class="bg"></span>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 lg3 class="lg-11">
              <v-card
                style=" left: 8% ; top: 15px; z-index: 2; position: relative;"
                width="25%"
                height="50"
                left="25%"
                class="mb-n2"
              >
                <v-card-text>LOGIN</v-card-text>
              </v-card>
              <v-card relative class="mb-n2" width="100%">
                <v-img class="white--text align-end" height="250px" src="Flat-Mountains.svg" />
              </v-card>
              <v-card :loading="state" :disabled="state">
                <v-card-text class="pb-0 pt-7 px-11">
                  <v-form ref="form" lazy-validation>
                    <v-text-field
                      @keydown.space="(event) => event.preventDefault()"
                      v-model="userid"
                      prepend-inner-icon="person"
                      :rules="nameRules"
                      label="username"
                      color="dark"
                      outlined
                      required
                    ></v-text-field>

                    <v-text-field
                      @keydown.space="(event) => event.preventDefault()"
                      v-model.trim="password"
                      prepend-inner-icon="lock"
                      :rules="passwordRules"
                      label="Password"
                      color="dark"
                      type="password"
                      outlined
                      v-on:keyup.enter="validate"
                    ></v-text-field>
                  </v-form>
                  <v-flex>
                    <v-layout justify-center align-center>
                      <v-card-actions width="20%" class="pt-0 pb-5 px-0" min-height="10px">
                        <v-btn color="cyan" dark @click="validate">Login</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-layout>
                  </v-flex>
                  <!-- <v-checkbox
                    width="100%"
                    v-model="checkbox"
                    value="1"
                    label="Remember me"
                    :rules="[v => !!v || 'check here to remeber']"
                    data-vv-name="checkbox"
                    type="checkbox"
                    required
                  ></v-checkbox>-->
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VeeValidate from "vee-validate";
import snackbar from "vee-validate";
import "../assets/index.css";

@Component
export default class Login extends Vue {
  userid = "";
  password = "";
  checkbox = false;
  state = false;
  snackbar: any;
  nameRules = [
    (v: any) => !!v || "User ID is required",
    (v: any) =>
      (v && v.length <= 20) || "User ID must be less than 20 characters"
  ];

  passwordRules = [
    (v: any) => !!v || "Password is required",
    (v: any) =>
      (v && v.length <= 10) || "password must be less than 10 characters"
  ];

  validate() {
    if (this.$refs.form.validate()) {
      this.snackbar = true;
      console.log(`userid   :${this.userid}\npassword :${this.password}`);
      this.password = "123456789456123";
      this.userid = " ";
      this.state = true;
    }
  }
}
</script>