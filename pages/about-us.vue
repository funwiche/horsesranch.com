<template>
  <v-breadcrums title="About Us" desc="We are Passionate About Horses" />
  <section class="text-white px-6 py-12 lg:py-20">
    <div
      class="sm lg:lg grid lg:grid-cols-2 items-center gap-12 mb-6 pb-6 border-b"
    >
      <div>
        <img src="/about-me.jpg" :alt="$app.name" class="rounded-2xl" />
      </div>
      <div>
        <h2 class="font-black text-4xl">Who We Are</h2>
        <div class="mb-6">
          We have an excellent facility that is located in southern Texas,
          McAllen. Buy with confidence at {{ $app.name }}! Every horse here has
          been hand selected! Well-broke, classy and, above all, safe. Each
          horse comes with documentation of vaccinations, a certificate of
          soundness from a certified veterinarian.
        </div>

        <div class="mb-6">
          We take pride in offering a rich variety of horse breeds and
          disciplines, each accompanied by comprehensive health records,
          engaging videos, and striking images that showcase the grace and
          beauty of our equine companions.
        </div>
        <div class="mb-6">
          What sets us apart? We build on trust and transparency, offering you
          the opportunity to connect with your potential horse on a personal
          level.
        </div>
        <div class="mb-6">
          Whether you&rsquo;re a seasoned equestrian or a first-time owner, our
          listings offer detailed insight to help you find the right companion.
          Explore, connect, and embark on a smooth horse-buying journey.
        </div>
        <div>
          Your dream horse awaits&mdash;find it here at {{ $app.name }}.
        </div>
      </div>
    </div>
    <div class="sm lg:lg">
      <div class="mb-6">
        <strong>Versatile Horses Ranch</strong> is a private ranch in McAllen,
        Texas, owned by Charles H. Davis. They specialize in training horses
        through a thorough desensitization program, exposing them to a wide
        variety of sights, sounds, and situations to ensure they are calm and
        reliable.
      </div>
      <div class="mb-6">
        The ranch primarily caters to novice and inexperienced riders, with an
        average customer age of 55. Many clients haven't ridden in over 30 years
        or have never owned a horse. While they focus on gentle, family-oriented
        horses suitable for beginners, they also have more advanced horses for
        experienced riders.
      </div>
      <div class="mb-6">
        A key part of their process is matching the right horse to the rider.
        They emphasize the importance of being honest about your current riding
        ability, confidence level, and goals, rather than past experience. They
        encourage potential buyers to self-reflect on their desired riding style
        and frequency to ensure a perfect fit for everyone, from total beginners
        to seasoned riders.
      </div>
    </div>
  </section>
  <hr class="lg" />
  <section class="text-white px-6 py-12 lg:py-20">
    <div class="sm lg:lg md:flex md:flex-row-reverse items-center gap-12">
      <div class="flex-1 max-lg:mb-8">
        <img src="/slides/01.jpg" :alt="$app.name" class="rounded-2xl" />
      </div>
      <div class="flex-1">
        <h2 class="font-black text-4xl">Our Mission</h2>
        <div class="mb-6">
          At {{ $app.name }}, our mission is simple:
          <strong
            >to raise and sell quality horses with care, integrity, and
            passion</strong
          >.
        </div>
        <div class="mb-6">
          We believe every horse deserves the right home, and every rider
          deserves a trusted companion. Whether you&rsquo;re looking for a loyal
          partner, a competitive performer, or a gentle horse for your family,
          we are dedicated to helping you find the perfect match.
        </div>
        <div class="grid grid-cols-2 gap-6 pt-6">
          <div class="flex-start" v-for="n in mission">
            <i class="fa-solid fa-circle-check text-tint w-6" />
            <div class="flex-1">{{ n }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="text-white px-6 py-12 lg:py-20">
    <div class="sm lg:lg md:flex md:flex-row-reverse items-center gap-12">
      <div class="flex-1 max-lg:mb-8">
        <img src="/slides/01.jpg" :alt="$app.name" class="rounded-2xl" />
      </div>
      <div class="flex-1">
        <h2 class="font-black text-4xl">Our Mission</h2>
        <p>
          <strong>Versatile Horses Ranch</strong> is a private ranch in McAllen,
          Texas, owned by Charles H. Davis. They specialize in training horses
          through a thorough desensitization program, exposing them to a wide
          variety of sights, sounds, and situations to ensure they are calm and
          reliable.
        </p>
        <p>
          The ranch primarily caters to novice and inexperienced riders, with an
          average customer age of 55. Many clients haven't ridden in over 30
          years or have never owned a horse. While they focus on gentle,
          family-oriented horses suitable for beginners, they also have more
          advanced horses for experienced riders.
        </p>
        <p>
          A key part of their process is matching the right horse to the rider.
          They emphasize the importance of being honest about your current
          riding ability, confidence level, and goals, rather than past
          experience. They encourage potential buyers to self-reflect on their
          desired riding style and frequency to ensure a perfect fit for
          everyone, from total beginners to seasoned riders.
        </p>
      </div>
    </div>
  </section> -->
  <section class="bg-base/65 px-6 py-12 lg:py-20">
    <div class="lg">
      <h2 class="font-black text-4xl mb-12 text-center">
        Our Core Values that Drive <br />
        Everything We Do
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="flex" v-for="n in values">
          <i
            class="fa-solid fa-box-check size-14 center bg-black text-white rounded-full text-2xl mt-1"
          />
          <div class="flex-1 pl-3">
            <h4 class="mb-0">{{ n.title }}</h4>
            <div class="opacity-80">{{ n.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="px-6 py-12 lg:py-20">
    <div class="lg">
      <h2 class="font-black text-5xl mb-6 text-white">
        Equine <span class="text-tint">Athletes</span>
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
        <img
          v-for="n in 25"
          :src="`/gallery/${n.toString().padStart(2, '0')}.jpg`"
          class="object-cover object-center aspect-[3/4] rounded-lg"
        />
      </div>
      <!-- <div class="masonry-grid">
        <div v-for="n in 27" class="masonry-item">
          <img :src="`/gallery/${n.toString().padStart(2, '0')}.jpg`" />
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
const mission = [
  "Quality and Variety",
  "Sustainable Practices",
  "Expert Guidance",
  "Experienced Team",
];
const values = [
  {
    title: "Integrity",
    desc: "Honest and transparent horse sales you can trust every time.",
  },
  {
    title: "Quality Care",
    desc: "Every horse is raised with health, and proper training.",
  },
  {
    title: "Customer Commitment",
    desc: "We help every buyer find the perfect horse for their needs.",
  },
  {
    title: "Expertise",
    desc: "Years of hands-on experience guide every step of your journey.",
  },
  {
    title: "Ethical Responsibility",
    desc: "We prioritize responsible breeding and the welfare of our horses.",
  },
  {
    title: "Passion for Horses",
    desc: "Our deep love for horses inspires everything we do at the ranch.",
  },
];
</script>

<style scoped>
.masonry-grid {
  columns: 5 150px;
  column-gap: 10px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 10px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
