/* -------------------------------------------------------------
   Vercel Speed Insights Integration
   Tracks Core Web Vitals and performance metrics
   
   This script initializes Vercel Speed Insights for this site.
   The @vercel/speed-insights package is installed via npm.
   
   For production deployments on Vercel, the /_vercel/speed-insights/script.js
   is automatically served. For other hosting, this ensures Speed Insights
   works by loading from the public CDN.
------------------------------------------------------------- */

(function() {
    'use strict';
    
    // Check if Speed Insights is already loaded (via Vercel deployment)
    if (document.querySelector('script[src*="speed-insights"]')) {
        console.log('[Speed Insights] Already initialized via Vercel deployment');
        return;
    }
    
    // Initialize the Speed Insights queue
    window.si = window.si || function() {
        (window.siq = window.siq || []).push(arguments);
    };

    // Create and inject the Speed Insights script
    var script = document.createElement('script');
    script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.js';
    script.defer = true;
    
    script.onload = function() {
        console.log('[Speed Insights] Successfully loaded and tracking Core Web Vitals');
    };
    
    script.onerror = function() {
        console.warn('[Speed Insights] Failed to load script. Please check if any content blockers are enabled.');
    };
    
    // Append to head
    document.head.appendChild(script);
})();
