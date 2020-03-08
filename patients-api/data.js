const data = {
  patient: {
    personal: {
      patient_id: "P123wq3",
      title: "Mr.",
      first_name: "John",
      middle_name: "Doe",
      surname: "Smith",
      dob: "13.05.80",
      age: "26",
      discount: "15%",
      first_name_address: "98 Hudson St, DUNCHURCH, CV22 3ZH",
      default_add: "079 4327 4373",
      mobile: "smith"
    },
    addresses: {
      work: "Flat 2 100 Lansdowne Place Hove United Kingdom East Sussex"
    },
    contact: {
      mobile: "07714306877",
      email: "en@abcclinic.com",
      rx_sms: false,
      rx_email: false,
      marketing_sms: false,
      marketing_email: false
    },

    history_of_prescriptions: [
      {
        id: "R00320123",
        date: "11.05.19",
        prescriber: "John Doe",
        status: "LIVE",
        portal: "True"
      },
      {
        id: "R00320123",
        date: "11.05.19",
        prescriber: "John Doe",
        status: "LIVE",
        portal: "True"
      }
    ],
    notes: [
      {
        msg:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        details: "Note added by Pharmacist on 07.05.2019 09:32 pm"
      },
      {
        msg:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        details: "Note added by Pharmacist on 07.05.2019 09:32 pm"
      }
    ],
    dispatch_address: {
      address: "Flat 2 100 Lansdowne Place Hove United Kingdom East Sussex"
    },
    history_of_items: [
      {
        id: "R00320123",
        date: "11.05.19",
        requested_items: "Testosterone 2.5mg per 0.3ml dose cream x 50ml",
        pack_size: "50 ml",
        status: "Request Made"
      },
      {
        id: "R00320123",
        date: "11.05.19",
        requested_items: "Testosterone 2.5mg per 0.3ml dose cream x 50ml",
        pack_size: "50 ml",
        status: "Request Made"
      }
    ],
    total_found: { number: "1401/2392" }
  }
};

module.exports = data;
