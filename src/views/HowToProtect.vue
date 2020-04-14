<template>
  <div>
    <div class="precautions">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="title">
              Keep yourself at your Home Quarantine
              <br />
              <span>Stay Home, Stay Safe.</span>
            </h3>
            <lottie
              :options="defaultOptions"
              :height="300"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
          </div>
        </div>
      </div>
    </div>
    <section class="bg-grey">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h3 class="title">Coronavirus COVID-19 Prevention</h3>
            <p class="desc">
              You can protect yourself and help prevent spreading the
              coronavirus (COVID-19) to others if you do all the step shown as
              this infographics. You can safe from coronavirus and safe other if
              you are affected
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <lottie
              :options="defaultOptions1"
              :height="200"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
            <h3 class="prevn-title">Wash your hand regularly</h3>
            <p class="prevn-desc">
              Wash your hands frequently Regularly and thoroughly clean your
              hands with an alcohol-based hand rub or wash them with soap and
              water.
            </p>
          </div>
          <div class="col-lg-4">
            <lottie
              :options="defaultOptions4"
              :height="200"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
            <h3 class="prevn-title">Wear Mask & Avoid touching face</h3>
            <p class="prevn-desc">
              Wear sergical mask and avoid touching face. Hands touch many
              surfaces and can pick up viruses. Once contaminated, hands can
              transfer the virus to your eyes, nose or mouth.
            </p>
          </div>

          <div class="col-lg-4">
            <lottie
              :options="defaultOptions5"
              :height="200"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
            <h3 class="prevn-title">Avoid Hands Shake & Close Contact</h3>
            <p class="prevn-desc">
              Please avoid hand shake with others person and maintain at least 1
              metre (3 feet) distance between yourself and anyone who is
              coughing or sneezing.
            </p>
          </div>
          <div class="col-lg-4">
            <lottie
              :options="defaultOptions3"
              :height="200"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
            <h3 class="prevn-title">Stay at Home</h3>
            <p class="prevn-desc">
              Stay home, stay safe. if you feel unwell. If you have a fever,
              cough and difficulty breathing, seek medical attention and call in
              advance follow the directions of your healthcare.
            </p>
          </div>
          <div class="col-lg-4">
            <lottie
              :options="defaultOptions2"
              :height="200"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
            <h3 class="prevn-title">Use Hand Sanitizer or Soap</h3>
            <p class="prevn-desc">
              Using hands sanitizer or soap when you wash your hands, keep wash
              yor hand al least 20 minute during the handwash.
            </p>
          </div>
          <div class="col-lg-4">
            <lottie
              :options="defaultOptions6"
              :height="200"
              :width="'100%'"
              v-on:animCreated="handleAnimation"
            />
            <h3 class="prevn-title">Keep Inform Doctors</h3>
            <p class="prevn-desc">
              If you are think you are suffering with this above symptoms.
              Please call a doctor as soon as posible for your medical advice.
              or live chat with our doctors we are waiting for your message
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Lottie from "vue-lottie";
import * as animationData from "@/assets/images/doctors.json";
import * as animationData1 from "@/assets/images/wash-hands.json";
import * as animationData2 from "@/assets/images/hand-sanitizer.json";
import * as animationData3 from "@/assets/images/stay-home.json";
import * as animationData4 from "@/assets/images/mask.json";
import * as animationData5 from "@/assets/images/namaste.json";
import * as animationData6 from "@/assets/images/corona-doctor.json";
export default {
  name: "HowToProtect",
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      defaultOptions1: { animationData: animationData1.default },
      animationSpeed: 1,
      defaultOptions2: { animationData: animationData2.default },
      animationSpeed: 1,
      defaultOptions3: { animationData: animationData3.default },
      animationSpeed: 1,
      defaultOptions4: { animationData: animationData4.default },
      animationSpeed: 1,
      defaultOptions5: { animationData: animationData5.default },
      animationSpeed: 1,
      defaultOptions6: { animationData: animationData6.default },
      animationSpeed: 1
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
