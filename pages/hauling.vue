<template>
  <v-breadcrums title="Hauling" />
  <section class="bg-white p-8">
    <div class="md md:flex gap-8">
      <div class="flex-1 pb-6">
        <h4>
          WE WILL SHIP FOR NO EXTRA COST! <br />IN SOME SELECTED STATES WITHIN
          THE USA
        </h4>
        <p>
          You do not have to worry about paying extra for shipping if you are
          located within our SELECTED STATES because shipping is already
          inclusive in the horse price!
        </p>
        <p>
          As a general rule of thumb, we ask for one week to ship your horse.
          Many times we can get the horse to you within 4-5 days depending on
          where you live, but we've found that it's much better not to raise
          expectations and have someone disappointed. We have professional
          transport, most of the companies we have worked with many times in the
          past. Before shipping, we have a normal process to get your horse
          ready to ship. We have to obtain a health certificate from our vet,
          which can take a few days before the horse can leave. During this time
          we prepare your horse for shipping with probiotics and electrolytes,
          it's also moved to a private paddock or stall and will be groomed
          before leaving. Our transport cost usually ranges from $650 and above.
          It depends on several factors:
        </p>
        <ul>
          <li>how far you live;</li>
          <li>how many horses you want to be transported;</li>
          <li>( If you purchase 3+ horses, we will ship them for free)</li>
          <li>how fast you want to transport your horse;</li>
          <li>do you wish to transport your horse alone?</li>
          <li>
            Payment Terms: Please note that prior to shipping, clients are
            required to pay either the full price or a minimum of 50% of the
            initial price of the horse(s) to be transported. Payment must be
            received before delivery commences.
          </li>
        </ul>
        <p>
          According to your request, we always try to find the best possible
          solution with our partners to transport the horse to your place Only
          about 5% of our customers actually fly or drive in to try our horses
          before they buy them. Because we do guarantee our horses, most
          customers choose not to come here. Although we love it when customers
          come in, we have references all over the country that we are more than
          happy to let you talk to. We encourage customers who are close, or
          can, to come try the horses. Although we are very good at matching
          people with the right horses, it can help us to see and evaluate the
          rider's skill level too.
        </p>
        <p>ALL HORSES COME WITH A 30 DAYS MONEY BACK GUARANTEE!!!</p>
      </div>
      <div class="md:w-1/3 grid sm:grid-cols-4 md:grid-cols-1">
        <img
          v-for="n in 4"
          :src="`/hauling-${n.toString().padStart(2, '0')}.jpg`"
          class="w-full rounded-lg mb-1"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
