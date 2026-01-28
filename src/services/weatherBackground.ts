export function getWeatherBackground(
  main: string,
  icon: string,
  description?: string
): string {
  const isNight = icon.endsWith("n");

  switch (main) {
    case "Clear":
      return isNight
        ? "/assets/images/limpo-noite.png"
        : "/assets/images/limpo.png";

    case "Clouds":
      if (description === "few clouds") {
        return isNight
          ? "/assets/images/poucas-nuvens-noite.png"
          : "/assets/images/poucas-nuvens.png";
      }

      if (description === "scattered clouds") {
        return isNight
          ? "/assets/images/nuvens-chegando-noite.jpg"
          : "/assets/images/nuvens-chegando.png";
      }

      if (description === "broken clouds") {
        return isNight
          ? "/assets/images/nublado-noite.png"
          : "/assets/images/nublado.jpg";
      }

      if (description === "overcast clouds") {
        return "/assets/images/nublado.jpg";
      }

      return isNight
        ? "/assets/images/nublado-noite.png"
        : "/assets/images/nublado.jpg";

    case "Drizzle":
      return isNight
        ? "/assets/images/garoa-noite.png"
        : "/assets/images/garoa.png";

    case "Rain":
      return "/assets/images/chuva.png";

    case "Thunderstorm":
      return "/assets/images/tempestade.png";

    case "Snow":
      return isNight
        ? "/assets/images/neve-noite.png"
        : "/assets/images/neve.png";

    case "Mist":
    case "Fog":
    case "Haze":
      return "/assets/images/neblina.jpeg";

    default:
      return isNight
        ? "/assets/images/limpo-noite.png"
        : "/assets/images/limpo.png";
  }
}
