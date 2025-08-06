"use client";

import { PaymentModal } from "@/components/paymentModal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [paymentModIsOpen, setPaymentModIsOpen] = useState<boolean>(false);

  return (
    <section className=" bg-gray-200 m-auto border-1 border-gray-400/50 p-4 w-full md:w-fit shadow">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
          <span className="block mb-2 text-violet-600 font-bold text-xl">
            ST. CATHERINE
          </span>
          <h1 className="text-3xl font-extrabold">
            HOUSE OF HOPE CHILDREN&apos;S HOME
          </h1>
          <p className="my-8">
            <span className="font-medium">Modular and versatile.</span>A
            privately owned Charitable Children&apos;s Institution located at
            Sega, Ugenya in Siaya county. Established in 2004, it has since
            served hundreds of vulnerable children from across the lake region
            of Kenya. We currently host 30 school attending children and run a
            home-based care for about 35 children that we previously hosted and
            reintegrated back to the mother communities in accordance to the
            Children&apos;s Act 2022 and Changing the Way We Care programme.
          </p>
          <div className="self-stretch space-y-3">
            <button
              type="button"
              onClick={() => setPaymentModIsOpen(true)}
              className="w-full py-2 font-semibold rounded bg-violet-600 hover:bg-violet-800 cursor-pointer text-gray-50"
            >
              DONATE
            </button>
          </div>
        </div>
        <Image
          src="/img/pik-a-boo.jpg"
          alt=""
          width={480}
          height={360}
          className="object-cover w-full rounded-md xl:col-span-3 h-full"
        />
      </div>
      <PaymentModal
        isOpen={paymentModIsOpen}
        setVisible={setPaymentModIsOpen}
      />
    </section>
  );
}
