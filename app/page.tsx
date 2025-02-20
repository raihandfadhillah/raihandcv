"use client";

import Image from "next/image";
import {
  Code,
  Database,
  Palette,
  Shield,
  Settings,
  Phone,
  Instagram,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-300 p-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Bagian Header Profil */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-white text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
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
            Mahasiswa Sistem Informasi Semester 4 di Ma&apos;soem University
          </p>
        </div>

        {/* Bagian Isi Profil */}
        <div className="p-6 text-black">
          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" /> Skills
            </h2>
            <ul className="mt-2 space-y-2 opacity-90">
              <li className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-500" /> Web Development
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-5 h-5 text-yellow-500" /> Database
                Management
              </li>
              <li className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-pink-500" /> UI/UX Design
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" /> Cyber Security
                Basics
              </li>
              <li className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" /> Software
                Engineering
              </li>
            </ul>
          </section>

          {/* Services */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-500" /> Services
            </h2>
            <p className="mt-2 opacity-90">
              Saya menyediakan layanan Web Development dengan desain yang
              responsif dan fungsional.
            </p>
          </section>

          {/* Portfolios */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
              <Palette className="w-5 h-5 text-pink-500" /> Portfolios
            </h2>
            <ul className="mt-2 list-disc list-inside opacity-90 space-y-2">
              <li>Membuat website personal</li>
              <li>Desain UI/UX menggunakan Figma</li>
              <li>Editing dengan Photoshop</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" /> Contact
            </h2>
            <p className="mt-2 flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-600" />
              <a
                href="https://instagram.com/raihandfadhillahh"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @raihandfadhillahh
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
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
