<template>
  <v-breadcrums title="Returns & Refund" />
  <section class="bg-white p-8">
    <div class="md">
      <h4>1. Our Commitment</h4>
      <p>
        At {{ $app.name }}, we are dedicated to ensuring a perfect match between
        our horses and their new owners. We stand behind the health and
        soundness of our animals and offer a transparent return process should
        serious, undisclosed issues arise.
      </p>

      <h4>
        <strong>2. Purchase and Health Guarantee</strong>
      </h4>
      <p>
        We offer
        <strong>30 days</strong> money back guarantee.
      </p>
      <p>
        We also guarantee the Horse to be free from fatal or life-altering
        diseases that adversely affect its health for a period of one (1) year
        from the date of arrival.
      </p>
      <p>
        In the event of the Horse's death within this one-year period, the Buyer
        agrees to have a necropsy (autopsy) performed at their expense. If the
        necropsy reveals a congenital defect or disease as the cause of death,
        the Seller shall:
      </p>
      <ul>
        <li>
          <p>Provide a replacement Horse of equal value</p>
        </li>
        <li>
          <p>Pay for the cost of the necropsy</p>
        </li>
      </ul>
      <p>
        This guarantee is contingent upon the Buyer providing proper care and
        maintenance of the Horse, including regular veterinary check-ups and
        vaccinations.
      </p>
      <h4>
        <strong>3. The Return Process</strong>
      </h4>
      <p>To initiate a return, you must:</p>

      <ol start="1">
        <li>
          <p>
            <strong>Notify Us:</strong> Contact us in writing (email to [your
            email]) within <strong>24 hours</strong> of delivery to report the
            concern.
          </p>
        </li>
        <li>
          <p>
            <strong>Provide Veterinary Report:</strong> Within the 30 days
            window, provide a detailed written report from a licensed
            veterinarian diagnosing the issue and stating it is likely
            pre-existing. This examination must be at your expense.
          </p>
        </li>
        <li>
          <p>
            <strong>Validation:</strong> We reserve the right to have our
            veterinarian review the report and/or examine the horse to validate
            the claim.
          </p>
        </li>
      </ol>
      <h4>4. Refund Process</h4>
      <p>If your return is approved based on the above conditions:</p>

      <ul>
        <li>
          <p>
            We will provide a <strong>full refund</strong> of the purchase
            price.
          </p>
        </li>
        <li>
          <p>
            <strong>We are responsible for and will arrange</strong> for the
            horse to be shipped back to our facility at our expense.
          </p>
        </li>
        <li>
          <p>
            Upon safe arrival of the horse back at {{ $app.name }}, the refund
            will be processed to your original payment method.
          </p>
        </li>
      </ul>
      <h4>5. Final Sales</h4>
      <p>
        All sales are considered final after the 30 days guarantee period has
        expired, or if the terms of this policy are not met. We do not accept
        returns for buyer's remorse or a change in circumstances.
      </p>

      <h4>6. Contact Us</h4>
      <p>Questions about this policy or to initiate a return?</p>
      <p>
        <strong class="no-underline">{{ $app.name }}</strong> <br />
        <strong class="no-underline">Address: </strong>{{ $app.address }} <br />
        <strong class="no-underline">Business Hours: </strong>{{ $app.hours }}
        <br />
        <strong class="no-underline">Email Address: </strong> {{ $app.email }}
        <br />
        <strong class="no-underline">Phone Number:</strong> {{ $app.phone }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeo({
  title: "Returns and Refund",
  desc: "",
  image: "",
  breadcrumbs: [{ name: "Returns and Refund", path: "/returns-refund" }],
});
</script>

<style scoped></style>
