import i18n from "../i18n";

export const transformPaymentStatus = (status: string) => {
  switch (status) {
    case "confirmed":
      return { localized: i18n.t("Confirmed"), status: "success" };
    case "refunded":
      return { localized: i18n.t("Refunded"), status: "success" };
    case "waiting":
      return {
        localized: i18n.t("Waiting for confirmation"),
        status: "neutral"
      };
    case "preauth":
      return { localized: i18n.t("Preauthorized"), status: "neutral" };
    case "input":
      return { localized: i18n.t("Input"), status: "neutral" };
    case "rejected":
      return { localized: i18n.t("Rejected"), status: "error" };
    case "error":
      return { localized: i18n.t("Error"), status: "error" };
  }
  return {
    localized: status,
    status: "error"
  };
};

export const transformOrderStatus = (status: string) => {
  switch (status) {
    case "fulfilled":
      return { localized: i18n.t("Fulfilled"), status: "success" };
    case "unfulfilled":
      return { localized: i18n.t("Unfulfilled"), status: "neutral" };
  }
  return {
    localized: status,
    status: "error"
  };
};