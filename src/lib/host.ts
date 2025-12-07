const PROD_MAIN_URL = "drickspel.com";
const DEBUG_CLUB = "debug-club";

export function GetHost() {
  const location = window.location;

  return location.host;
}

export function GetClub() {
  if (import.meta.env.MODE === "development") {
    return DEBUG_CLUB;
  }

  const host = GetHost();
  return host.replace(PROD_MAIN_URL, "");
}
