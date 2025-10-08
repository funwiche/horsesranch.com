<template>
  <v-breadcrums title="Privacy Policy" />
  <section class="bg-white p-8">
    <div class="md">
      <h4>1. Introduction</h4>
      <p>
        Welcome to {{ $app.name }}. We are committed to protecting your privacy
        and safeguarding your personal information. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you
        visit our website
        <a
          href="https://horsesranch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong class="text-black">horsesranch.com</strong> </a
        >, communicate with us, or purchase our services.
      </p>
      <p>
        By using our Site and services, you consent to the data practices
        described in this policy.
      </p>
      <h4>2. Information We Collect</h4>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <p>
            <strong>Personal Information You Provide:</strong> This includes
            information you provide when inquiring about a horse, filling out a
            form, or making a purchase. Examples include:
          </p>
          <ul>
            <li>
              <p>Full Name</p>
            </li>
            <li>
              <p>Email Address</p>
            </li>
            <li>
              <p>Phone Number</p>
            </li>
            <li>
              <p>Billing and Shipping Address</p>
            </li>
            <li>
              <p>
                Payment Information (e.g., credit card details, which are
                processed by a secure third-party payment processor)
              </p>
            </li>
            <li>
              <p>
                Information about your equestrian experience and facility for
                horse matching purposes.
              </p>
            </li>
            <li>
              <p>
                Any other details you choose to provide in communications with
                us.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Information Collected Automatically:</strong> When you visit
            our Site, we may automatically collect:
          </p>
          <ul>
            <li>
              <p>
                <strong>Log Data:</strong> Your IP address, browser type,
                operating system, referring URLs, pages visited, and dates/times
                of access.
              </p>
            </li>
            <li>
              <p>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies (small data files stored on your device) to enhance your
                experience, analyze site traffic, and understand how visitors
                use our Site. You can control cookie settings through your
                browser.
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <h4>3. How We Use Your Information</h4>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>
          <p>To provide, operate, and maintain our Site and services.</p>
        </li>
        <li>
          <p>
            To process your transactions and manage your orders (including
            arranging shipping).
          </p>
        </li>
        <li>
          <p>
            To communicate with you, including responding to your inquiries and
            sending you important administrative information (e.g., updates
            about a horse, sale contracts, shipping details).
          </p>
        </li>
        <li>
          <p>
            To match horses with suitable owners based on provided criteria.
          </p>
        </li>
        <li>
          <p>For internal record-keeping and administrative purposes.</p>
        </li>
        <li>
          <p>To improve our website, services, and customer experience.</p>
        </li>
        <li>
          <p>To comply with legal obligations and protect our legal rights.</p>
        </li>
      </ul>
      <h4>4. How We Share Your Information</h4>
      <p>
        We value your trust and do not sell, trade, or rent your personal
        information to third parties for their marketing purposes.
      </p>
      <p>
        We may share information with third-party service providers who assist
        us in operating our business, under strict confidentiality agreements.
        These parties include:
      </p>
      <ul>
        <li>
          <p>
            <strong>Payment Processors:</strong> (e.g., Stripe, PayPal) to
            securely handle financial transactions.
          </p>
        </li>
        <li>
          <p>
            <strong>Shipping and Transport Companies:</strong> To arrange and
            manage the delivery of horses to your location. This will include
            sharing your name, address, and contact number.
          </p>
        </li>
        <li>
          <p>
            <strong>Website Hosting and Analytics Providers:</strong> (e.g.,
            Google Analytics) to help us understand how our Site is used.
          </p>
        </li>
        <li>
          <p>
            <strong>Professional Advisors:</strong> Such as lawyers or
            accountants, as necessary.
          </p>
        </li>
      </ul>
      <p>
        We may also disclose your information if required by law, to protect our
        rights, or in connection with the sale or transfer of our business.
      </p>
      <h4>5. Data Retention</h4>
      <p>
        We will retain your personal information only for as long as is
        necessary to fulfill the purposes outlined in this Privacy Policy,
        comply with our legal obligations, resolve disputes, and enforce our
        agreements.
      </p>
      <h4>6. Your Privacy Rights</h4>
      <p>
        Depending on your location, you may have certain rights regarding your
        personal information, such as:
      </p>
      <ul>
        <li>
          <p>
            The right to access and receive a copy of your personal information.
          </p>
        </li>
        <li>
          <p>
            The right to correct (rectify) inaccurate information we hold about
            you.
          </p>
        </li>
        <li>
          <p>The right to request the deletion of your personal information.</p>
        </li>
        <li>
          <p>The right to opt-out of marketing communications.</p>
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the details
        below.
      </p>
      <h4>7. Security of Your Information</h4>
      <p>
        We implement appropriate technical and organizational security measures
        designed to protect your personal information from unauthorized access,
        alteration, disclosure, or destruction. However, no method of
        transmission over the Internet or electronic storage is 100% secure, and
        we cannot guarantee its absolute security.
      </p>
      <h4>8. Children's Privacy</h4>
      <p>
        Our Site and services are not directed to individuals under the age of
        18. We do not knowingly collect personal information from children. If
        we become aware that a child has provided us with personal information,
        we will take steps to delete such information.
      </p>
      <h4>9. Changes to This Privacy Policy</h4>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on this page and updating the
        "Last Updated" date. We encourage you to review this policy
        periodically.
      </p>
      <h4>10. Contact Us</h4>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
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
