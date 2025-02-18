"use client";

import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Bagian Header Profil */}
        <div className="bg-blue-700 p-6 text-white text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/raihand.jpeg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">Raihand Fadhillah</h1>
          <p className="text-lg opacity-90">
            Mahasiswa Sistem Informasi Semester 4 di Ma'soem University
          </p>
        </div>

        {/* Bagian Isi Profil */}
        <div className="p-6 text-black">
          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
            <ul className="mt-2 list-disc list-inside opacity-90">
              <li>Web Development</li>
              <li>Database Management</li>
              <li>UI/UX Design</li>
              <li>Cyber Security Basics</li>
              <li>Software Engineering</li>
            </ul>
          </section>

          {/* Services */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">Services</h2>
            <p className="mt-2 opacity-90">
              Saya menyediakan layanan Web Development dengan desain yang
              responsif dan fungsional.
            </p>
          </section>

          {/* Portfolios */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2">Portfolios</h2>
            <ul className="mt-2 list-disc list-inside opacity-90">
              <li>Membuat website personal</li>
              <li>Desain UI/UX menggunakan Figma</li>
              <li>Editing dengan Photoshop</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2">Contact</h2>
            <p className="mt-2">
              Instagram:{" "}
              <a
                href="https://instagram.com/raihandfadhillahh"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @raihandfadhillahh
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/08972357252"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                08972357252
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
