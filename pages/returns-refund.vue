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
        <strong>2. Pre-Purchase Examination (PPE) Requirement</strong>
      </h4>
      <p>
        To ensure your complete confidence, we <strong>require</strong> a
        pre-purchase veterinary examination (PPE) at the buyer's expense before
        any sale is finalized. This is your opportunity to verify the horse's
        condition for its intended purpose.
      </p>

      <h4>
        <strong
          >3. Limited Health Guarantee &amp; Eligibility for Return</strong
        >
      </h4>
      <p>
        We offer a limited guarantee on all horses for
        <strong>72 hours</strong> after delivery to your specified address.
      </p>
      <p>
        To be eligible for a return and refund, a horse must have a
        <strong>major, undisclosed health or soundness issue</strong> that was
        not apparent during the pre-purchase exam and that prevents it from
        being used for its advertised purpose.
      </p>
      <p>This guarantee <strong>does not cover</strong>:</p>

      <ul>
        <li>
          <p>
            Behavioral or training issues that were demonstrated or disclosed
            prior to sale.
          </p>
        </li>
        <li>
          <p>Minor conditions, blemishes, or scars.</p>
        </li>
        <li>
          <p>
            Injuries or illnesses that occur after the horse has been delivered
            to you.
          </p>
        </li>
        <li>
          <p>
            Failure to thrive in a new environment or issues arising from a
            change in management.
          </p>
        </li>
      </ul>
      <h4>
        <strong>4. The Return Process</strong>
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
            <strong>Provide Veterinary Report:</strong> Within the 72-hour
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
      <h4>5. Refund Process</h4>
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
      <h4>6. Final Sales</h4>
      <p>
        All sales are considered final after the 72-hour guarantee period has
        expired, or if the terms of this policy are not met. We do not accept
        returns for buyer's remorse or a change in circumstances.
      </p>

      <h4>7. Contact Us</h4>
      <p>Questions about this policy or to initiate a return?</p>
      <p>
        <strong class="no-underline">{{ $app.name }}</strong> <br />
        <strong class="no-underline">Address:</strong>{{ $app.address }} <br />
        <strong class="no-underline">Business Hours:</strong>{{ $app.hours }}
        <br />
        <strong class="no-underline">Email Address:</strong> {{ $app.email }}
        <br />
        <strong class="no-underline">Phone Number:</strong> {{ $app.phone }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
