import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { CertificationSection } from '../../(main)/online-courses/professional-organizing/certificationSection';
import { brevoEmailTemplateId, brevoListId } from '../constants';
import { FreeCatalogComponent } from '../freeCatalogComponent';
import { HeroSection } from '../freeCatalogComponent/_sections/heroSection';
import { Header } from '../header';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/icons/download.svg';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Design School',
};

const FreeCatalogPage: PageComponent = ({ searchParams }) => {
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = headers();
  const referrer = headerList.get('referer');
  return(
    <>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <HeroSection
        brevoListId={brevoListId}
        brevoEmailTemplateId={brevoEmailTemplateId}
        gclid={gclid}
        msclkid={msclkid}
        utmSource={utmSource}
        utmMedium={utmMedium}
        utmCampaign={utmCampaign}
        utmContent={utmContent}
        utmTerm={utmTerm}
        referrer={referrer}
        professionTitle="Professional Organizer"
      />
      <FreeCatalogComponent courseName="Professional Organizing" professionTitle="Professional Organizer" CertificationSection={CertificationSection} />
    </>
  );
};

export default FreeCatalogPage;
