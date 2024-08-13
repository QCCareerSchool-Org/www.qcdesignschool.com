import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { LeadProcessing } from '../../../components/leadProcessing';
import CatalogImage from './catalog.jpg';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/icons/download.svg';
import { Logo } from '@/components/logo';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Your Course Catalog - QC Design School',
};

const ThankYouCourseCatalogPage: PageComponent = ({ searchParams }) => {
  const { countryCode, provinceCode } = getData();
  const headerList = headers();
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.firstName);
  const emailAddress = getParam(searchParams.emailAddress);
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const leadId = getParam(searchParams.leadId);

  return (
    <>
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        ipAddress={ipAddress}
        leadId={leadId}
        conversionId="AW-1071836607/5nunCL-7PhC_24v_Aw"
      />
      <section className="p-0" />
      <section>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-12 col-lg-6 col-xxl-5 mb-s mb-lg-0">
              <div className="mb-2">
                <Logo height={24} />
              </div>
              <h1 className="mb-4">Your Course Catalog</h1>
              <p className="lead fw-bold mb-3">Thank You For Your Interest in QC Design School!</p>
              <p className="mb-5">Learn more about QC's professional Interior Decorating Certification Program, tuition & payment information, and how you can get started!</p>
              <div className="d-flex">
                <Link href="/catalog.pdf" download className="btn btn-navy me-3"><DownloadIcon height={16} style={{ position: 'relative', top: -1 }} className="me-2" />Download Catalog</Link>
                <Link href="/online-event-courses" className="btn btn-outline-navy">View Courses</Link>
              </div>
            </div>
            <div className="col-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center">
              <Link href="/catalog.pdf" download><Image src={CatalogImage} placeholder="blur" priority alt="QC Event School course catalog" style={{ marginLeft: '-11.2%', marginRight: '-21.9%', marginTop: '-11.7%', marginBottom: '-11.7%' }} className="img-fluid" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 col-sm-7 col-lg-4">
              <h2 className="h5">Online Design Courses</h2>
            </div>
            <div className="col-8 col-sm-7 col-lg-4">
              <h2 className="h5">Student Experience</h2>
            </div>
            <div className="col-8 col-sm-7 col-lg-4">
              <h2 className="h5">Enroll Online</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouCourseCatalogPage;
