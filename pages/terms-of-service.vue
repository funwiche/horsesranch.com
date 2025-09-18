<template>
  <v-breadcrums title="Terms of Service" />
  <section class="bg-white p-8">
    <div class="md">
      <h4>1. Agreement to Terms</h4>
      <p>
        By accessing the website
        <a
          href="https://horsesranch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong class="text-black">horsesranch.com</strong>
        </a>
        and utilizing the services of Horses Ranch, you agree to be bound by
        these Terms of Service and our Privacy Policy. If you do not agree to
        all of these terms, you are prohibited from using the Site and our
        services.
      </p>

      <h4>2. Services</h4>
      <p>Horses Ranch operates as a seller of horses. Our services include:</p>

      <ul>
        <li>
          <p>Providing information about horses available for purchase.</p>
        </li>
        <li>
          <p>
            Facilitating communication between potential buyers and our ranch.
          </p>
        </li>
        <li>
          <p>Arranging for pre-purchase examinations.</p>
        </li>
        <li>
          <p>Managing the sale transaction and related paperwork.</p>
        </li>
        <li>
          <p>
            Arranging and responsible for shipping and delivery of the horse to
            the buyer.
          </p>
        </li>
      </ul>
      <h4>3. Purchases and Payment</h4>
      <ul>
        <li>
          <p>
            <strong>Listing Accuracy:</strong> We strive to represent our horses
            accurately. However, all descriptions and prices are subject to
            change without notice.
          </p>
        </li>
        <li>
          <p><strong>Sale Process:</strong> A sale is not final until:</p>

          <ol>
            <li>
              <p>
                A purchase agreement or bill of sale is signed by both parties.
              </p>
            </li>
            <li>
              <p>The full purchase price has been received by Horses Ranch.</p>
            </li>
          </ol>
        </li>
        <li>
          <p>
            <strong>Payment:</strong> We accept payment via [e.g., bank wire,
            cashier's check, secure online payment processor]. Prices are as
            listed and are subject to any applicable sales tax.
          </p>
        </li>
      </ul>
      <h4>4. Pre-Purchase Examination (PPE)</h4>
      <ul>
        <li>
          <p>
            We <strong>require</strong> that the buyer obtains a pre-purchase
            veterinary examination (PPE) at their own expense before the sale is
            finalized.
          </p>
        </li>
        <li>
          <p>
            The sale is contingent upon the results of the PPE being
            satisfactory to the buyer.
          </p>
        </li>
        <li>
          <p>
            Any issues discovered during the PPE must be discussed with us to
            potentially renegotiate or cancel the sale.
          </p>
        </li>
      </ul>
      <h4>5. Shipping and Delivery</h4>
      <ul>
        <li>
          <p>
            <strong>Our Responsibility:</strong> Horses Ranch is responsible for
            arranging and paying for standard shipping to deliver the horse to
            the buyer's specified address.
          </p>
        </li>
        <li>
          <p>
            <strong>Risk of Loss:</strong> Title and risk of loss pass to the
            buyer upon delivery of the horse to the buyer's designated location.
          </p>
        </li>
        <li>
          <p>
            <strong>Shipping Arrangements:</strong> We will coordinate the
            shipping logistics with a professional equine transporter. The buyer
            agrees to be available to receive the horse on the scheduled
            delivery date.
          </p>
        </li>
      </ul>
      <h4>6. Return and Refund Policy</h4>
      <p>
        All sales are subject to our
        <a class="text-black" href="/returns-refund"
          ><strong>Return and Refund Policy</strong></a
        >, which is incorporated into these Terms by reference. Please review
        this policy carefully before making a purchase. In summary, we offer a
        limited 72-hour guarantee for major, undisclosed health issues upon
        delivery, with a full refund and return shipping provided by us if the
        return is approved.
      </p>

      <h4>7. User Conduct</h4>
      <p>You agree not to use the Site to:</p>

      <ul>
        <li>
          <p>Harass, abuse, or threaten any other person.</p>
        </li>
        <li>
          <p>Provide false or misleading information.</p>
        </li>
        <li>
          <p>Infringe on the intellectual property rights of others.</p>
        </li>
        <li>
          <p>Upload or transmit viruses or any other malicious code.</p>
        </li>
      </ul>
      <h4>8. Intellectual Property</h4>
      <p>
        All content on this Site, including text, graphics, logos, images, and
        software, is the property of Horses Ranch or its content suppliers and
        is protected by copyright and other intellectual property laws.
      </p>

      <h4>9. Disclaimer of Warranties &amp; Limitation of Liability</h4>
      <ul>
        <li>
          <p>
            <strong>"As Is" Basis:</strong> The horses are sold on an "as is"
            and "where is" basis, with the sole exception of the limited
            guarantee outlined in our Return and Refund Policy.
          </p>
        </li>
        <li>
          <p>
            <strong>No Guarantees:</strong> Beyond the express terms of the
            Return Policy, Horses Ranch makes no warranties, express or implied,
            regarding the horse's future performance, temperament, or
            suitability for any particular purpose.
          </p>
        </li>
        <li>
          <p>
            <strong>Limitation of Liability:</strong> To the fullest extent
            permitted by law, Horses Ranch shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            but not limited to loss of profits, data, use, or other intangible
            losses, resulting from your purchase, use of, or inability to use
            our services or a horse purchased from us.
          </p>
        </li>
      </ul>
      <h4>10. Indemnification</h4>
      <p>
        You agree to indemnify and hold harmless Horses Ranch and its owners,
        employees, and agents from and against any claims, liabilities, damages,
        losses, and expenses (including legal fees) arising out of or in any way
        connected with your breach of these Terms, your use of the Site, or your
        ownership of a horse purchased from us.
      </p>

      <h4>11. Governing Law</h4>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the State of [Your State], without regard to its conflict of law
        principles.
      </p>

      <h4>12. Changes to Terms</h4>
      <p>
        We reserve the right to modify these Terms of Service at any time. We
        will do so by posting updated terms on the Site. Your continued use of
        the Site after such changes constitutes your acceptance of the new
        Terms.
      </p>

      <h4>13. Contact Information</h4>
      <p>Questions about these Terms of Service should be sent to us at:</p>
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
