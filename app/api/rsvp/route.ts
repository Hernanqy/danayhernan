const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwP3iwqTzRleyLlpbj4ebeb2i8XdKhqYT6hkwpjR5680C3gcFb-3XHVRybyhof78CeJCA/exec";

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.text();

    const googleResponse =
      await fetch(
        APPS_SCRIPT_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded;charset=UTF-8",
          },

          body,

          redirect: "follow",

          cache: "no-store",
        }
      );

    const result =
      await googleResponse.text();

    if (!googleResponse.ok) {

      console.error(
        "Google Apps Script error:",
        googleResponse.status,
        result
      );

      return Response.json(
        {
          ok: false,
          error:
            "GOOGLE_REQUEST_FAILED",
        },
        {
          status: 502,
        }
      );
    }

    return new Response(
      result,
      {
        status: 200,

        headers: {
          "Content-Type":
            "application/json; charset=utf-8",
        },
      }
    );

  }
  catch (error) {

    console.error(
      "RSVP API error:",
      error
    );

    return Response.json(
      {
        ok: false,
        error:
          "RSVP_SERVER_ERROR",
      },
      {
        status: 500,
      }
    );
  }
}