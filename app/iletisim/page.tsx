"use client";
import { swiperGroupTestimonials1 } from "@/util/swiperOption";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactForm, ContactFormSchema } from "@/lib/definitions";
import { createContactForm } from "../api/homepage/createContactForm";
import ShowValidationError from "@/components/layout/Toast/Error/ShowValidationError";
import ShowError from "@/components/layout/Toast/Error/ShowError";
import ShowSuccess from "@/components/layout/Toast/Success/ShowSuccess";
import { useState } from "react";

export default function Contact() {
  const [hideContactFrom, setHideContactForm] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    resetField,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    console.log("Form submitted", data);
    const response = await createContactForm(data);
    if ("errorType" in response) {
      ShowValidationError(response.errorsValidation!);
      ShowError(response.errorMessage);
    } else {
      ShowSuccess(
        "Mesajınızı başarılı şekilde aldık, sizinle en kısa sürede iletişime geçeceğiz"
      );
      reset({});
      setHideContactForm(true);
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-100">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  {" "}
                  <Link href="/">Anasayfa</Link>
                  <span className="arrow-right">
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="text-breadcrumb">İletişim</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="box-section box-location-shop background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-7 wow fadeInUp">
                  <h1 className="neutral-1000 mt-15 mb-15">
                    {" "}
                    <span>Bizimle</span> İletişime <span>Geçin</span>
                  </h1>
                  <p className="text-xl-medium neutral-500">
                    Size yardımcı olmaktan mutluluk duyarız.
                  </p>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-lg-4 col-sm-6">
                  <div className="card-contact">
                    <div className="card-image">
                      <div className="card-icon">
                        <svg
                          width={22}
                          height={24}
                          viewBox="0 0 22 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.3104 17.0467L15.0824 16.3042L14.2826 14.7045C15.0032 13.9711 15.5035 13.0007 15.6722 11.9885L15.7719 11.3906H16.625C17.4004 11.3906 18.0312 10.7598 18.0312 9.98438V7.03125C18.0312 3.15422 14.877 0 11 0C7.11303 0 3.96875 3.14517 3.96875 7.03125V9.98438C3.96875 10.5954 4.36067 11.1165 4.90625 11.31V11.8594C4.90625 12.6348 5.53709 13.2656 6.3125 13.2656H6.72416C6.92736 13.707 7.19037 14.1159 7.51044 14.4832C7.57681 14.5595 7.64605 14.6334 7.71697 14.7054L6.91756 16.3042L4.68955 17.0467C2.099 17.9106 0.21875 20.6377 0.21875 23.5312C0.21875 23.7901 0.428609 24 0.6875 24H21.3125C21.5713 24 21.7812 23.7901 21.7812 23.5312C21.7812 20.6377 19.901 17.9106 17.3104 17.0467ZM17.0938 9.98438C17.0938 10.2428 16.8835 10.4531 16.625 10.4531H15.9096C16.0288 9.53016 16.1082 8.54798 16.1401 7.58063C16.141 7.55334 16.1418 7.52681 16.1426 7.5H17.0938V9.98438ZM5.375 10.4531C5.11653 10.4531 4.90625 10.2428 4.90625 9.98438V7.5H5.85772C5.85927 7.54889 5.86091 7.59802 5.86273 7.64747C5.86278 7.64916 5.86287 7.6508 5.86292 7.65248C5.86292 7.65263 5.86292 7.65277 5.86292 7.65291C5.89573 8.59378 5.97411 9.55045 6.09055 10.4531H5.375V10.4531ZM6.3125 12.3281C6.05403 12.3281 5.84375 12.1178 5.84375 11.8594V11.3906H6.22803L6.32778 11.9887C6.34681 12.1024 6.3702 12.2156 6.39725 12.3281H6.3125ZM5.84455 6.5625H4.92406C5.16148 3.42089 7.7833 0.9375 11 0.9375C14.2024 0.9375 16.8357 3.42056 17.0759 6.5625H16.1555C16.1218 3.97373 14.0136 1.875 11.4196 1.875H10.5805C7.9865 1.875 5.87825 3.97373 5.84455 6.5625ZM10.5805 2.8125H11.4195C13.52 2.8125 15.22 4.53052 15.2188 6.62859C15.2188 6.77611 15.2176 6.90455 15.2151 7.02141C15.2151 7.02291 15.215 7.02445 15.215 7.026L14.6287 6.94223C13.0359 6.7148 11.532 5.96283 10.394 4.8248C10.306 4.73691 10.1868 4.6875 10.0625 4.6875C8.80363 4.6875 7.59856 5.26106 6.80197 6.23006C6.99828 4.32136 8.61186 2.8125 10.5805 2.8125ZM7.36906 12.3281C7.13441 11.5475 6.86591 9.25064 6.80656 7.77877L7.43745 6.93755C8.01687 6.16523 8.91833 5.68537 9.87725 5.6303C11.139 6.83105 12.7713 7.62398 14.4962 7.87027L15.1863 7.96889C15.1401 8.94788 15.0459 9.93028 14.9108 10.8338C14.9108 10.8341 14.9107 10.8344 14.9107 10.8347C14.8678 11.1252 14.8339 11.3122 14.7475 11.8343C14.4992 13.3233 13.3882 14.6698 11.9215 15.0365C11.3179 15.1872 10.682 15.1871 10.0787 15.0365C9.16292 14.8075 8.3232 14.1739 7.78128 13.2656H8.73688C8.93038 13.8112 9.45139 14.2031 10.0625 14.2031H11C11.777 14.2031 12.4062 13.5739 12.4062 12.7969C12.4062 12.0215 11.7754 11.3906 11 11.3906H10.0625C9.4378 11.3906 8.92447 11.7941 8.73608 12.3281H7.36906ZM10.0231 15.9851C10.3446 16.0529 10.6724 16.0875 11 16.0875C11.2565 16.0875 11.513 16.066 11.7665 16.0244L10.9383 16.9004L10.0231 15.9851ZM10.2938 17.5818L8.80705 19.1541C8.39773 18.3706 8.04603 17.5553 7.75756 16.7205L8.31589 15.6038L10.2938 17.5818ZM13.6047 15.445L14.2423 16.7205C13.9534 17.5566 13.6016 18.3723 13.1927 19.1548L11.6014 17.5635L13.6047 15.445ZM9.59375 12.7969C9.59375 12.5381 9.80366 12.3281 10.0625 12.3281H11C11.2585 12.3281 11.4688 12.5384 11.4688 12.7969C11.4688 13.0557 11.2588 13.2656 11 13.2656H10.0625C9.80403 13.2656 9.59375 13.0553 9.59375 12.7969ZM1.175 23.0625C1.36077 20.7404 2.90619 18.6297 4.98603 17.9361L6.95919 17.2785C7.32069 18.2782 7.76853 19.2497 8.29339 20.1726C8.29428 20.1742 8.29513 20.1758 8.29602 20.1773L8.29606 20.1774C8.67955 20.8519 9.11117 21.511 9.57913 22.1368L10.1558 23.0625H1.175ZM11 22.6447L10.3643 21.624C10.3572 21.6126 10.3496 21.6015 10.3415 21.5907C9.96191 21.0844 9.60781 20.5548 9.28531 20.0128L10.957 18.245L12.7185 20.0064C12.3938 20.5524 12.0385 21.0841 11.6586 21.5906C11.6356 21.6212 11.6682 21.573 11 22.6447ZM11.8442 23.0625L12.4208 22.1368C12.8908 21.5087 13.3256 20.8443 13.7129 20.1619C13.7152 20.1577 13.7174 20.1535 13.7198 20.1494C13.7201 20.1489 13.7203 20.1484 13.7206 20.1479C14.2388 19.2338 14.682 18.2707 15.0408 17.2785L17.0139 17.9361C19.0938 18.6297 20.6392 20.7404 20.825 23.0625H11.8442Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="card-info">
                      <div className="card-title">
                        {" "}
                        <Link className="title text-lg-bold" href="#">
                          Yardım Merkezi
                        </Link>
                        <p className="text-xs-medium neutral-500">
                          Herhangi bir sorunuz için{" "}
                          <Link className="" href="#">
                            Sıkça Sorulan Sorulara
                          </Link>{" "}
                          bakabilir ya da bize mail atablirsiniz.
                        </p>
                      </div>
                      <div className="card-method-contact">
                        {" "}
                        <Link
                          className="email text-sm-bold"
                          href="/mailto:support@geziekibi.com"
                        >
                          support@geziekibi.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="card-contact">
                    <div className="card-image">
                      <div className="card-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_942_29777)">
                            <path d="M13.6613 0C13.4023 0 13.1925 0.209839 13.1925 0.468749C13.1925 0.72766 13.4023 0.937499 13.6613 0.937499C18.8451 0.937499 23.0624 5.15496 23.0624 10.3387C23.0624 10.5976 23.2724 10.8074 23.5312 10.8074C23.7901 10.8074 23.9999 10.5976 23.9999 10.3387C23.9999 4.63805 19.3621 0 13.6613 0Z" />
                            <path d="M20.7114 10.8076C20.9703 10.8076 21.1801 10.5976 21.1801 10.3389C21.1801 6.19281 17.8071 2.81982 13.6613 2.81982C13.4023 2.81982 13.1925 3.02985 13.1925 3.28857C13.1925 3.54748 13.4023 3.75732 13.6613 3.75732C17.2902 3.75732 20.2426 6.70971 20.2426 10.3389C20.2426 10.5976 20.4524 10.8076 20.7114 10.8076Z" />
                            <path d="M17.4222 10.3391C17.4222 10.5978 17.6321 10.8079 17.891 10.8079C18.1499 10.8079 18.3597 10.5978 18.3597 10.3391C18.3597 7.74835 16.252 5.64062 13.6613 5.64062C13.4023 5.64062 13.1925 5.85046 13.1925 6.10919C13.1925 6.3681 13.4023 6.57794 13.6613 6.57794C15.7351 6.57794 17.4222 8.26507 17.4222 10.3391Z" />
                            <path d="M13.1925 8.9292C13.1925 9.18793 13.4023 9.39776 13.6613 9.39776C14.1802 9.39776 14.6024 9.82001 14.6024 10.3391C14.6024 10.5978 14.8123 10.8079 15.0712 10.8079C15.3299 10.8079 15.5399 10.5978 15.5399 10.3391C15.5399 9.3031 14.6971 8.46045 13.6613 8.46045C13.4023 8.46045 13.1925 8.67029 13.1925 8.9292Z" />
                            <path d="M8.78589 15.2192C8.78589 15.4781 8.57605 15.688 8.31714 15.688C8.05823 15.688 7.84839 15.4781 7.84839 15.2192C7.84839 14.9605 8.05823 14.7505 8.31714 14.7505C8.57605 14.7505 8.78589 14.9605 8.78589 15.2192Z" />
                            <path d="M12.8452 23.4311C14.9797 24.4772 17.5476 24.042 19.2354 22.3541L20.2046 21.3849C20.7309 20.8592 20.731 20.0076 20.2048 19.4816L16.4599 15.7371C15.9346 15.211 15.0828 15.2103 14.5569 15.7369L12.9657 17.3282C12.6541 17.6399 12.1731 17.7034 11.8222 17.4795C11.2502 17.1138 10.6938 16.7106 10.1684 16.2811C9.96793 16.1172 9.67277 16.1468 9.50889 16.3472C9.34501 16.5477 9.37467 16.843 9.57499 17.0067C10.1285 17.4593 10.7146 17.8841 11.3176 18.2694C12.0363 18.7284 13.0082 18.6114 13.6286 17.9911L15.2201 16.3995C15.3792 16.2402 15.6371 16.2399 15.7969 16.3997L19.542 20.1444C19.7014 20.3041 19.7018 20.5622 19.542 20.7217L18.5726 21.6913C17.1665 23.0973 15.0308 23.4582 13.2578 22.5894C6.76249 19.4043 3.22856 14.3539 1.40777 10.6779C0.536733 8.91986 0.898366 6.79218 2.30773 5.38318L3.25585 4.43525C3.41478 4.27595 3.67278 4.2754 3.83244 4.43543L7.57786 8.18067C7.73643 8.33905 7.73808 8.59723 7.5775 8.75745L5.98631 10.3488C5.36595 10.9692 5.24895 11.9411 5.70799 12.66C5.97844 13.0831 6.26994 13.5006 6.57463 13.9007C6.73137 14.1067 7.02543 14.1464 7.23143 13.9897C7.43742 13.8329 7.47734 13.5389 7.32042 13.3327C7.03148 12.9531 6.75462 12.5569 6.49791 12.1553C6.27397 11.8043 6.33751 11.3233 6.64915 11.0117L8.24015 9.42065C8.76621 8.89533 8.76676 8.04334 8.24052 7.51764L4.49547 3.77277C3.97032 3.24671 3.11833 3.24598 2.59264 3.77259L1.64489 4.72034C-0.0492033 6.41388 -0.482064 8.97534 0.567678 11.0941C2.45311 14.9003 6.11339 20.1301 12.8452 23.4311Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_942_29777">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="card-info">
                      <div className="card-title">
                        {" "}
                        <Link className="title text-lg-bold" href="#">
                          Bizi Arayın
                        </Link>
                        <p className="text-xs-medium neutral-500">
                          Bizi arayarak kolayca ulaşabilirsiniz.
                        </p>
                      </div>
                      <div className="card-method-contact">
                        {" "}
                        <Link
                          className="email text-sm-bold"
                          href="/tel:(+01) 234 567 89"
                        >
                          (+01) 234 567 89 - 456 789 21
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="card-contact">
                    <div className="card-image">
                      <div className="card-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.0042 0.00244153C7.20275 0.00174168 2.86325 2.8638 0.973396 7.27773L0.823828 7.32732L0.881815 7.50128C-1.60647 13.6383 1.35137 20.6305 7.48839 23.1188C8.92174 23.7 10.454 23.9983 12.0007 23.9974C18.6267 23.9984 23.999 18.6278 24 12.0017C24.001 5.37572 18.6303 0.00339134 12.0042 0.00244153ZM21.4149 18.0489L20.7989 17.4332V15.9991C20.7996 15.9372 20.7859 15.876 20.7589 15.8203L19.1992 12.7054V11.2001C19.1992 11.0664 19.1325 10.9416 19.0212 10.8674L17.8215 10.0675C17.7275 10.0048 17.6112 9.98471 17.5016 10.0124L16.0323 10.3795L13.5644 9.3205L13.2248 6.9418L14.1658 6.00119H16.1858L16.8657 7.02298C16.9271 7.11486 17.0238 7.1773 17.1328 7.19534L19.5323 7.59526C19.5966 7.60606 19.6625 7.60081 19.7243 7.58006L21.9342 6.84342C23.7878 10.4004 23.5895 14.6786 21.4149 18.0489ZM19.7655 3.94322L19.1152 4.37673L17.3024 4.01401L16.1262 3.62249C16.0543 3.59804 15.9768 3.59494 15.9031 3.61369L14.4162 3.98521L13.7643 3.76806L14.2474 2.80186H15.5999C15.662 2.80191 15.7232 2.78756 15.7787 2.75987L17.1624 2.06801C18.1153 2.56541 18.9919 3.19688 19.7655 3.94322ZM7.62041 1.69529L8.58021 2.33516C8.6274 2.36655 8.68069 2.38754 8.73658 2.39674L10.6746 2.71988L10.4854 3.28576L9.47563 3.62289C9.38519 3.65298 9.30846 3.71437 9.25927 3.79605L8.11071 5.71005L6.26589 6.81702L3.54646 7.20534C3.34935 7.23318 3.20278 7.4018 3.20253 7.60086V8.80061C3.20253 8.90669 3.24472 9.00836 3.31971 9.08335L4.00237 9.76601V10.4531L2.33871 9.34369L1.73524 7.53327C2.8834 4.90982 4.98781 2.82225 7.62041 1.69529ZM6.48185 14.8074L4.67423 14.4454L4.00237 13.1053V12.1655L5.49246 10.6754L6.04394 11.7788C6.11168 11.9144 6.2503 12 6.40187 11.9999H8.97493L10.0583 13.8056C10.1306 13.9259 10.2607 13.9995 10.401 13.9995H11.5128L11.2329 15.402L9.71877 16.9161C9.64364 16.9911 9.60135 17.0927 9.6012 17.1989V18.1987L8.1615 19.2784C8.06082 19.354 8.00153 19.4725 8.00153 19.5984V21.0429L7.50404 20.8781L6.80178 19.1217V15.1993C6.80183 15.0092 6.66806 14.8453 6.48185 14.8074ZM5.2797 20.9551C1.50903 18.1263 -0.0855829 13.2385 1.29133 8.73022L1.62366 9.72682C1.65166 9.81115 1.70694 9.88378 1.78083 9.93317L3.77441 11.2621L3.31971 11.7172C3.24472 11.7922 3.20253 11.8939 3.20253 11.9999V13.1997C3.20248 13.2617 3.21683 13.3229 3.24452 13.3785L4.04436 14.9781C4.09975 15.0886 4.20307 15.1673 4.3243 15.1913L6.00395 15.5268V19.1984C6.0039 19.2492 6.01355 19.2996 6.03234 19.3468L6.83218 21.3464C6.87597 21.4556 6.96565 21.5401 7.07732 21.5771L8.27707 21.9771C8.31717 21.9907 8.35916 21.9977 8.40145 21.9979C8.6223 21.9979 8.80136 21.8188 8.80136 21.5979V19.7983L10.2411 18.7185C10.3417 18.643 10.401 18.5245 10.401 18.3986V17.3644L11.8835 15.8819C11.9393 15.8261 11.9773 15.755 11.9927 15.6776L12.3926 13.678C12.4359 13.4614 12.2954 13.2507 12.0788 13.2074C12.0531 13.2023 12.0269 13.1997 12.0007 13.1997H10.6274L9.54401 11.3941C9.47173 11.2737 9.34165 11.2002 9.20128 11.2001H6.64901L5.96196 9.8216C5.90442 9.70652 5.79504 9.62614 5.66802 9.60564C5.54104 9.5837 5.41142 9.62559 5.32129 9.71762L4.8022 10.2347V9.60044C4.8022 9.49436 4.76001 9.39268 4.68502 9.3177L4.00237 8.63504V7.94759L6.45865 7.59686C6.51139 7.58921 6.56213 7.57111 6.60782 7.54367L8.60741 6.34392C8.66349 6.31023 8.71048 6.26324 8.74418 6.20715L9.86794 4.33434L10.9273 3.98081C11.0469 3.94157 11.1408 3.84774 11.1801 3.72807L11.58 2.52832C11.6493 2.31861 11.5354 2.09241 11.3257 2.02312C11.3064 2.01672 11.2865 2.01182 11.2665 2.00842L8.95173 1.6225L8.54502 1.35136C11.0616 0.532231 13.7874 0.63361 16.2362 1.6373L15.5056 2.00202H14.0003C13.848 2.00117 13.7084 2.08696 13.6404 2.22318L12.8405 3.82285C12.742 4.0205 12.8223 4.26065 13.02 4.35918C13.0368 4.36758 13.0542 4.37478 13.0721 4.38073L14.2718 4.78065C14.3438 4.80509 14.4213 4.80819 14.495 4.78944L15.9819 4.41792L17.0712 4.78065C17.0868 4.78624 17.1029 4.79054 17.1192 4.79344L19.1188 5.19336C19.2228 5.21456 19.331 5.19326 19.4192 5.13417L20.3294 4.5271C20.7773 5.02604 21.1799 5.56393 21.5323 6.13436L19.5647 6.79023L17.4344 6.4351L16.7305 5.37932C16.6567 5.26869 16.5328 5.20201 16.3998 5.20136H14.0003C13.8942 5.20136 13.7925 5.24355 13.7175 5.31853L12.5178 6.51828C12.4287 6.60732 12.3868 6.73314 12.4046 6.85781L12.8045 9.65723C12.8247 9.79565 12.9157 9.91348 13.0445 9.96796L15.8439 11.1677C15.9241 11.2025 16.0136 11.2096 16.0982 11.1881L17.5263 10.831L18.3994 11.4141V12.7998C18.3987 12.8617 18.4124 12.9229 18.4394 12.9785L19.999 16.0935V17.5988C19.999 17.7049 20.0412 17.8065 20.1162 17.8815L20.9528 18.7185C17.2425 23.6642 10.2253 24.6656 5.2797 20.9551Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="card-info">
                      <div className="card-title">
                        {" "}
                        <Link className="title text-lg-bold" href="#">
                          Lokasyonumuz
                        </Link>
                        <p className="text-xs-medium neutral-500">
                          General Şükrü Kanatlı Mahallesi Atatürk Caddesi Petek
                          Apt. 24/3
                        </p>
                      </div>
                      <div className="card-method-contact">
                        {" "}
                        <Link className="text-sm-bold" href="#">
                          Antakya/HATAY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="box-section box-contact-form background-body">
            <div className="container">
              <div className="row">
                {!hideContactFrom ? (
                  <div className="col-lg-7 mb-30">
                    <h2 className="neutral-1000 mb-25">Bize Ulaşın</h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="form-contact"
                    >
                      <div className="row">
                        {/* First Name */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Adınız
                            </label>
                            <input
                              {...register("firstName")}
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                            />
                            {errors.firstName && (
                              <p className="error-text">
                                {errors.firstName.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Last Name */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Soyadınız
                            </label>
                            <input
                              {...register("lastName")}
                              className="form-control"
                              type="text"
                              placeholder="Last Name"
                            />
                            {errors.lastName && (
                              <p className="error-text">
                                {errors.lastName.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Email */}
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Email Adresiniz
                            </label>
                            <input
                              {...register("email")}
                              className="form-control"
                              type="email"
                              placeholder="email@domain.com"
                            />
                            {errors.email && (
                              <p className="error-text">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Phone */}
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Telefon Numaranız
                            </label>
                            <input
                              {...register("phone")}
                              className="form-control"
                              type="text"
                              placeholder="Phone number"
                            />
                            {errors.phone && (
                              <p className="error-text">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Message */}
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Your Message
                            </label>
                            <textarea
                              {...register("message")}
                              className="form-control"
                              rows={6}
                              placeholder="Leave us a message..."
                            ></textarea>
                            {errors.message && (
                              <p className="error-text">
                                {errors.message.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Agree */}
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-500">
                              <input
                                {...register("agreeToTerms")}
                                className="cb-remember"
                                type="checkbox"
                              />
                              <a
                                className="text-sm-bold"
                                href="/gizlilik-politikasi"
                              >
                                Gizlilik Sözleşmesini{" "}
                              </a>{" "}
                              okudum, onaylıyorum
                            </label>
                            {errors.agreeToTerms && (
                              <p className="error-text">
                                {errors.agreeToTerms.message}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Submit */}
                        <div className="col-lg-12">
                          <button type="submit" className="btn btn-book">
                            Mesaj Gönder
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <div className="alert alert-success text-center p-3 shadow-sm">
                      <strong>Başarılı!</strong> Mesajınızı başarılı şekilde
                      aldık.
                      <br />
                      Sizinle en kısa sürede iletişime geçeceğiz.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="box-section box-contact-map background-body">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117970.35474814587!2d35.5793081!3d36.4184086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525f31774ce652b%3A0x9be32962060d1ed3!2sHatay!5e0!3m2!1str!2str!4v1694296739847!5m2!1str!2str"
              width="100%"
              height={650}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>

          <section className="section-box box-media background-body">
            <div className="container-media wow fadeInUp">
              {" "}
              <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" />
              <img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
