// utils/gtag.ts

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const gtag_report_conversion = (url?: string): void => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17095039353/VDlUCPm_6MQbEPmyxtc_",
      value: 1.0,
      currency: "INR",
      event_callback: callback
    });

    // Fallback if event_callback does not fire (slow network)
    setTimeout(callback, 500);
  } else {
    // Immediate fallback if gtag does not exist
    callback();
  }
};


