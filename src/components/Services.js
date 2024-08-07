import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Frontend Development",
    para: "Transforming your ideas into reality with modern, responsive, and interactive web interfaces. Using cutting-edge technologies like React, Angular, and Vue, I ensure your website looks stunning and functions flawlessly across all devices",
    icon: (
      <svg
        width="76"
        height="77"
        viewBox="0 0 76 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.650024" width="76" height="76" rx="8" fill="#21201E" />
        <path
          d="M18.0428 31.8155C19.482 26.297 23.8789 22.0751 29.4003 20.9101L30.4554 20.6875C35.4316 19.6375 40.5684 19.6375 45.5447 20.6875L46.5997 20.9101C52.1211 22.0751 56.5181 26.297 57.9572 31.8155C59.1254 36.2952 59.1254 41.0049 57.9572 45.4845C56.5181 51.003 52.1211 55.225 46.5997 56.39L45.5446 56.6126C40.5684 57.6625 35.4316 57.6625 30.4554 56.6126L29.4003 56.39C23.8789 55.225 19.482 51.0031 18.0428 45.4846C16.8746 41.0049 16.8746 36.2952 18.0428 31.8155Z"
          stroke="white"
          stroke-width="3.125"
        />
        <path
          d="M25.5 38.65H29.6667L33.8333 44.9L42.1667 32.4L46.3333 38.65H50.5"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Backend Developement",
    para: "Building robust, scalable, and secure server-side applications to power your business. From RESTful APIs to complex database interactions, I use Node.js, Express, and other frameworks to create a solid foundation for your web applications",
    icon: (
      <svg
        width="76"
        height="77"
        viewBox="0 0 76 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.650024" width="76" height="76" rx="8" fill="#21201E" />
        <path
          d="M21.0467 35.9484C20.049 39.7187 20.0356 43.7362 21.0333 47.5065C22.2532 52.1166 25.9605 55.639 30.6101 56.6058L30.9338 56.6731C35.5952 57.6423 40.4048 57.6423 45.0662 56.6731L45.3899 56.6058C50.0396 55.639 53.7468 52.1166 54.9667 47.5065C55.9644 43.7362 55.951 39.7187 54.9533 35.9484C53.7522 31.4093 50.0848 27.876 45.5067 26.9241C40.5547 25.8944 35.4453 25.8944 30.4933 26.9241M21.0467 35.9484C22.2478 31.4093 25.9152 27.876 30.4933 26.9241M21.0467 35.9484C20.6336 37.5094 20.3893 39.1127 20.3155 40.7233V28.7586C20.3155 24.8165 22.9935 21.3442 26.7765 20.2972C27.7205 20.0359 28.7078 19.9 29.687 19.9H31.4744C34.977 19.9 39.0876 22.6316 40.5964 26.2434C38.0834 26.2438 32.967 26.4097 30.4933 26.9241M20.3155 42.8092V42.8454L20.3175 42.8509C20.3168 42.837 20.3162 42.8231 20.3155 42.8092Z"
          stroke="white"
          stroke-width="3.125"
          stroke-linecap="round"
        />
        <path
          d="M43.438 31.919L43.5268 31.9339C47.2412 32.5558 49.9637 35.7844 49.9637 39.5675"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hosting",
    para: "Offering reliable and high-performance hosting solutions to keep your website online and accessible. From shared hosting to dedicated servers, I provide the infrastructure and support needed to maintain your web presence",
    icon: (
      <svg
        width="76"
        height="77"
        viewBox="0 0 76 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.650024" width="76" height="76" rx="8" fill="#21201E" />
        <path
          d="M51.0725 46.5783V45.0158V46.5783ZM57.6129 38.2141L56.0851 38.5416L56.0851 38.5416L57.6129 38.2141ZM57.636 38.3215L59.1638 37.9941L59.1638 37.9941L57.636 38.3215ZM57.636 41.2613L56.1082 40.9339V40.9339L57.636 41.2613ZM51.182 33.0045V31.442V33.0045ZM49.0413 46.5783L47.5289 46.1856L47.0212 48.1408H49.0413V46.5783ZM50.3309 33.0045V31.442H48.664L48.7716 33.1054L50.3309 33.0045ZM51.0725 45.0158H50.0539V48.1408H51.0725V45.0158ZM56.0851 38.5416L56.1082 38.6489L59.1638 37.9941L59.1408 37.8867L56.0851 38.5416ZM56.1082 38.6489C56.2695 39.402 56.2695 40.1809 56.1082 40.9339L59.1638 41.5888C59.4177 40.404 59.4177 39.1788 59.1638 37.9941L56.1082 38.6489ZM51.0725 48.1408C54.9762 48.1408 58.3452 45.4082 59.1638 41.5888L56.1082 40.9339C55.5972 43.3179 53.4971 45.0158 51.0725 45.0158V48.1408ZM51.182 34.567C53.5428 34.567 55.5876 36.2202 56.0851 38.5416L59.1408 37.8867C58.3356 34.1299 55.0218 31.442 51.182 31.442V34.567ZM50.0539 45.0158H49.0413V48.1408H50.0539V45.0158ZM48.7716 33.1054C49.0561 37.5034 48.6367 41.9195 47.5289 46.1856L50.5536 46.971C51.745 42.3829 52.196 37.6335 51.8901 32.9037L48.7716 33.1054ZM51.182 31.442H50.3309V34.567H51.182V31.442Z"
          fill="#FEA609"
        />
        <path
          d="M28.153 20.3639L27.917 18.8193L28.153 20.3639ZM40.3664 20.3639L40.6024 18.8193L40.3664 20.3639ZM39.7371 56.9176L40.0102 58.456L39.7371 56.9176ZM28.7822 56.9176L29.0554 55.3791L29.0554 55.3791L28.7822 56.9176ZM20.3935 49.6938L21.8865 49.233L20.3935 49.6938ZM18.5406 29.4965L16.9887 29.3151L18.5406 29.4965ZM50.1299 30.7894L48.5779 30.9708V30.9708L50.1299 30.7894ZM48.5097 48.4502L47.0166 47.9894L47.0166 47.9894L48.5097 48.4502ZM18.6161 28.8507L20.168 29.0321L18.6161 28.8507ZM26.5581 20.6075L26.794 22.1521L26.5581 20.6075ZM28.5029 56.868L28.2298 58.4064H28.2298L28.5029 56.868ZM48.2097 49.4221L49.7027 49.8829V49.8829L48.2097 49.4221ZM49.9562 29.3035L51.5081 29.1221V29.1221L49.9562 29.3035ZM41.5118 20.5389L41.2758 22.0835L41.5118 20.5389ZM49.0412 46.5785L47.5289 46.1858L49.0412 46.5785ZM50.3308 33.0046L48.7716 33.1055L50.3308 33.0046ZM48.4042 29.4849L48.5779 30.9708L51.6818 30.6081L51.5081 29.1221L48.4042 29.4849ZM47.0166 47.9894L46.7167 48.9613L49.7027 49.8829L50.0027 48.911L47.0166 47.9894ZM20.0925 29.6779L20.168 29.0321L17.0642 28.6693L16.9887 29.3151L20.0925 29.6779ZM29.0554 55.3791L28.776 55.3295L28.2298 58.4064L28.5091 58.456L29.0554 55.3791ZM26.794 22.1521L28.389 21.9084L27.917 18.8193L26.3221 19.063L26.794 22.1521ZM40.1304 21.9084L41.2758 22.0835L41.7478 18.9943L40.6024 18.8193L40.1304 21.9084ZM28.389 21.9084C32.2803 21.3139 36.239 21.3139 40.1304 21.9084L40.6024 18.8193C36.3982 18.1769 32.1212 18.1769 27.917 18.8193L28.389 21.9084ZM39.464 55.3791C36.0212 55.9903 32.4981 55.9903 29.0554 55.3791L28.5091 58.456C32.3132 59.1314 36.2061 59.1314 40.0102 58.456L39.464 55.3791ZM21.8865 49.233C19.9355 42.9114 19.3244 36.2504 20.0925 29.6779L16.9887 29.3151C16.17 36.3192 16.8212 43.4176 18.9005 50.1546L21.8865 49.233ZM20.168 29.0321C20.5807 25.5011 23.2956 22.6866 26.794 22.1521L26.3221 19.063C21.4275 19.8108 17.6396 23.7457 17.0642 28.6693L20.168 29.0321ZM18.9005 50.1546C20.2224 54.4378 23.8219 57.6239 28.2298 58.4064L28.7761 55.3295C25.5243 54.7523 22.8642 52.4007 21.8865 49.233L18.9005 50.1546ZM46.7167 48.9613C45.6875 52.2959 42.8872 54.7714 39.464 55.3791L40.0102 58.456C44.5897 57.643 48.3293 54.3329 49.7027 49.8829L46.7167 48.9613ZM51.5081 29.1221C50.9014 23.931 46.9079 19.7827 41.7478 18.9943L41.2758 22.0835C45.0398 22.6585 47.9603 25.6865 48.4042 29.4849L51.5081 29.1221ZM47.5289 46.1858C47.3719 46.7901 47.2012 47.3915 47.0166 47.9894L50.0027 48.911C50.2011 48.268 50.3848 47.6212 50.5536 46.9712L47.5289 46.1858ZM48.5779 30.9708C48.661 31.6814 48.7255 32.3932 48.7716 33.1055L51.8901 32.9038C51.8405 32.1378 51.7711 31.3723 51.6818 30.6081L48.5779 30.9708ZM48.7716 33.1055C49.056 37.5035 48.6366 41.9196 47.5289 46.1858L50.5536 46.9712C51.745 42.383 52.196 37.6337 51.8901 32.9038L48.7716 33.1055Z"
          fill="white"
        />
        <path
          d="M25.5 37.6083V39.1999C25.5 42.2634 26.2133 45.2849 27.5833 48.025"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    title: "SEO",
    para: "Improving your website's visibility on search engines to attract more traffic and potential customers. Through keyword research, on-page optimization, and link-building strategies, I help your site rank higher and reach a broader audience",
    icon: (
      <svg
        width="76"
        height="77"
        viewBox="0 0 76 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.650024" width="76" height="76" rx="8" fill="#21201E" />
        <path
          d="M51.5 52.2684H56.75M34.1854 38.7418H56.75M39.6687 25.215L19.25 25.215M56.75 25.215H51.5M19.25 52.2684H39.6687"
          stroke="white"
          stroke-width="3.125"
          stroke-linecap="round"
        />
        <path
          d="M50.25 52.4C50.25 55.1614 48.0114 57.4 45.25 57.4C42.4886 57.4 40.25 55.1614 40.25 52.4C40.25 49.6386 42.4886 47.4 45.25 47.4C48.0114 47.4 50.25 49.6386 50.25 52.4Z"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
        />
        <path
          d="M32.75 38.65C32.75 41.4114 30.5114 43.65 27.75 43.65C24.9886 43.65 22.75 41.4114 22.75 38.65C22.75 35.8886 24.9886 33.65 27.75 33.65C30.5114 33.65 32.75 35.8886 32.75 38.65Z"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
        />
        <path
          d="M50.25 24.9C50.25 27.6614 48.0114 29.9 45.25 29.9C42.4886 29.9 40.25 27.6614 40.25 24.9C40.25 22.1386 42.4886 19.9 45.25 19.9C48.0114 19.9 50.25 22.1386 50.25 24.9Z"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Database Management",
    para: "Designing and managing databases that store and organize your data efficiently. Using SQL, NoSQL, and other database technologies, I ensure your data is accessible, secure, and well-structured to support your business needs",
    icon: (
      <svg
        width="76"
        height="77"
        viewBox="0 0 76 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.650024" width="76" height="76" rx="8" fill="#21201E" />
        <path
          d="M19.8688 24.5538C20.3384 22.5517 21.9017 20.9884 23.9037 20.5188V20.5188C25.6388 20.1118 27.4445 20.1118 29.1796 20.5188V20.5188C31.1817 20.9884 32.7449 22.5517 33.2146 24.5538V24.5538C33.6216 26.2888 33.6216 28.0945 33.2146 29.8296V29.8296C32.7449 31.8317 31.1817 33.395 29.1796 33.8646V33.8646C27.4445 34.2716 25.6388 34.2716 23.9037 33.8646V33.8646C21.9017 33.395 20.3384 31.8317 19.8688 29.8296V29.8296C19.4618 28.0945 19.4618 26.2888 19.8688 24.5538V24.5538Z"
          stroke="white"
          stroke-width="3.125"
        />
        <path
          d="M19.8688 47.4704C20.3384 45.4683 21.9017 43.9051 23.9037 43.4354V43.4354C25.6388 43.0284 27.4445 43.0284 29.1796 43.4354V43.4354C31.1817 43.9051 32.7449 45.4683 33.2146 47.4704V47.4704C33.6216 49.2055 33.6216 51.0112 33.2146 52.7462V52.7462C32.7449 54.7483 31.1817 56.3116 29.1796 56.7812V56.7812C27.4445 57.1882 25.6388 57.1882 23.9037 56.7812V56.7812C21.9017 56.3116 20.3384 54.7483 19.8688 52.7462V52.7462C19.4618 51.0112 19.4618 49.2055 19.8688 47.4704V47.4704Z"
          stroke="#FEA609"
          stroke-width="3.125"
        />
        <path
          d="M42.7854 24.5538C43.2551 22.5517 44.8183 20.9884 46.8204 20.5188V20.5188C48.5555 20.1118 50.3612 20.1118 52.0962 20.5188V20.5188C54.0983 20.9884 55.6616 22.5517 56.1312 24.5538V24.5538C56.5382 26.2888 56.5382 28.0945 56.1312 29.8296V29.8296C55.6616 31.8317 54.0983 33.395 52.0962 33.8646V33.8646C50.3612 34.2716 48.5555 34.2716 46.8204 33.8646V33.8646C44.8183 33.395 43.2551 31.8317 42.7854 29.8296V29.8296C42.3784 28.0945 42.3784 26.2888 42.7854 24.5538V24.5538Z"
          stroke="white"
          stroke-width="3.125"
        />
        <path
          d="M42.7854 47.4704C43.2551 45.4683 44.8183 43.9051 46.8204 43.4354V43.4354C48.5555 43.0284 50.3612 43.0284 52.0962 43.4354V43.4354C54.0983 43.9051 55.6616 45.4683 56.1312 47.4704V47.4704C56.5382 49.2055 56.5382 51.0112 56.1312 52.7462V52.7462C55.6616 54.7483 54.0983 56.3116 52.0962 56.7812V56.7812C50.3612 57.1882 48.5555 57.1882 46.8204 56.7812V56.7812C44.8183 56.3116 43.2551 54.7483 42.7854 52.7462V52.7462C42.3784 51.0112 42.3784 49.2055 42.7854 47.4704V47.4704Z"
          stroke="white"
          stroke-width="3.125"
        />
      </svg>
    ),
  },
  {
    title: "Responsive Web Design",
    para: "Creating websites that provide an optimal viewing experience across a wide range of devices. Whether it's a desktop, tablet, or mobile phone, I ensure your site looks great and performs well, no matter the screen size",
    icon: (
      <svg
        width="76"
        height="77"
        viewBox="0 0 76 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.650024" width="76" height="76" rx="8" fill="#21201E" />
        <path
          d="M38 49.0667L38 49.1138"
          stroke="#FEA609"
          stroke-width="4.16667"
          stroke-linecap="round"
        />
        <path
          d="M40.6042 28.2334H35.3958"
          stroke="#FEA609"
          stroke-width="3.125"
          stroke-linecap="round"
        />
        <path
          d="M53.209 42.9979H22.791M44.0751 56.6115C40.0932 57.6629 35.9068 57.6629 31.9249 56.6115C27.0195 55.3163 23.2667 51.359 22.2312 46.3897L22.0333 45.4402C21.1 40.9616 21.1 36.3385 22.0333 31.8599L22.2312 30.9103C23.2667 25.941 27.0195 21.9838 31.9249 20.6886C35.9068 19.6372 40.0932 19.6372 44.0751 20.6886C48.9805 21.9838 52.7333 25.941 53.7688 30.9103L53.9667 31.8599C54.9 36.3385 54.9 40.9616 53.9667 45.4402L53.7688 46.3897C52.7333 51.359 48.9805 55.3163 44.0751 56.6115Z"
          stroke="white"
          stroke-width="3.125"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <>
      <div className="py-[70px] w-full" id="services">
        <h2 className="text-[40px] font-bold mb-3">
          <span className="text-secondary">My</span>{" "}
          <span className="text-tertiary ">Services</span>
        </h2>
        <p className="text-paraColor lg:w-[50%]">
          Discover the range of services I offer to bring your digital vision to
          life. From crafting beautiful front-end designs to building robust
          back-end systems, I provide comprehensive solutions tailored to your
          needs. Explore how I can help elevate your online presence and drive
          your business forward.
        </p>
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-[30px] mt-9">
          {services?.map((service) => {
            return (
              <ServiceCard
                title={service?.title}
                para={service?.para}
                icon={service?.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] rounded-lg bg-[#48453f]" />
    </>
  );
};

export default Services;
