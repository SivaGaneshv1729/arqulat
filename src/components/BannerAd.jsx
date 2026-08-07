import React, { useEffect, useRef } from 'react';

export function BannerAd({ 
  adClient = 'ca-pub-1548704351257520', 
  adSlot = 'YOUR_AD_SLOT_ID', 
  format = 'auto', 
  responsive = true,
  className = ''
}) {
  const adRef = useRef(null);

  useEffect(() => {
    // This pushes the ad to google adsense script when the component mounts
    try {
      const adsbygoogle = window.adsbygoogle || [];
      // Only push if it hasn't been filled yet to avoid errors during re-renders
      if (adRef.current && adRef.current.innerHTML === '') {
          adsbygoogle.push({});
      }
    } catch (e) {
      console.error('Google AdSense error:', e);
    }
  }, []);

  return (
    <div className={`flex justify-center items-center overflow-hidden my-4 ${className}`} style={{ minHeight: '90px', background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px', position: 'relative' }}>
      {/* Placeholder for development - remove this when real ads are active */}
      <div style={{ position: 'absolute', fontSize: '12px', color: 'rgba(255,255,255,0.5)', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span>Advertisement Space</span>
        <span style={{ fontSize: '9px', marginTop: '4px', opacity: 0.5 }}>(Google AdSense)</span>
      </div>

      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
