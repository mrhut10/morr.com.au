import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <SEO title="Success: message sent" />
    <div className="flex flex-1 items-center justify-center mx-auto w-full">
      <div className="max-w-sm p-4">
        <h2 className="font-bold leading-none mb-2 pt-2 text-4xl text-green-600">
          Form submitted successfully!
        </h2>
        <p className="mb-4">
          Thank you for your message. We will get back to you as soon as we can.
        </p>
        <p>
          <Link
            className="bg-green-600 hover:bg-green-500 cursor-pointer font-bold inline-flex items-center leading-none px-4 py-2 text-white text-xs tracking-wide uppercase"
            to="/"
          >
            <Icon />
            Take Me Home
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

const Icon = () => (
  <svg
    className="inline-block mr-2"
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    style={{ width: `1em ` }}
    viewBox="0 0 1376 1377"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#fff" fillRule="nonzero">
      <path
        d="m0-117.766v117.772c0 1.151-.4 2.129-1.201 2.93-.801.808-1.773 1.208-2.917 1.208h-25.906c-1.144 0-2.117-.4-2.918-1.208-.801-.801-1.201-1.779-1.201-2.93v-55.523c0-1.15-.515-1.786-1.557-1.9-1.036-.116-1.901.292-2.587 1.207l-29.04 46.727c-.578.922-1.5 1.38-2.764 1.38-1.271 0-2.25-.458-2.943-1.38l-29.033-46.727c-.579-.915-1.386-1.323-2.422-1.207-1.036.114-1.557.75-1.557 1.9v55.523c0 1.151-.4 2.129-1.201 2.93-.801.808-1.774 1.208-2.918 1.208h-25.905c-1.144 0-2.117-.4-2.918-1.208-.801-.801-1.201-1.779-1.201-2.93v-117.772c0-1.15.4-2.129 1.201-2.936.801-.801 1.774-1.208 2.918-1.208h24.024c1.138 0 2.346.35 3.598 1.036 1.258.693 2.179 1.494 2.745 2.416l33.19 48.628c.693.921 1.5 1.378 2.422 1.378s1.671-.457 2.243-1.378l33.19-48.628c.687-.922 1.659-1.723 2.917-2.416 1.259-.686 2.46-1.036 3.604-1.036h24.019c1.144 0 2.116.407 2.917 1.208.801.807 1.201 1.786 1.201 2.936"
        transform="matrix(4.16667 0 0 4.16667 1373.61 1359.49)"
      />
      <path
        d="m0 318.737v-111.699c0-4.962-4.014-8.988-8.975-9.003l-56.622-.172c-4.118-.018-6.34-4.837-3.679-7.98l68.572-56.945c.446-.371.704-.921.704-1.5v-31.515c0-6.064 4.916-10.979 10.979-10.979h7.149c6.064 0 10.979 4.915 10.979 10.979v8.258l9.046-7.512 47.897-39.776c2.668-3.559 8.006-3.559 10.674 0l68.74 78.843c1.337 2.054 4.527 1.107 4.527-1.344l-.032-101.939c-.007-23.264-18.868-42.12-42.132-42.12h-245.763c-23.299 0-42.186 18.889-42.183 42.189l.034 236.639c.004 28.302 22.948 51.243 51.25 51.243h103.168c3.13 0 5.667-2.537 5.667-5.667"
        transform="matrix(4.16667 0 0 4.16667 667.163 23.6125)"
      />
    </g>
  </svg>
);

export default SuccessPage;
