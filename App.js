import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "hello abhishe tag"),
    React.createElement("h2", { id: "child2" }, "hello h2 tag"),
  ])
);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "346",
          "name": "Momoz",
          "uuid": "91420b44-6c7a-4e1c-b067-bccc707d92e1",
          "city": "1",
          "area": "BTM Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "pnlkjsjxqcjgzwwya3fd",
          "cuisines": [
              "Chinese",
              "Thai",
              "Seafood",
              "Asian",
              "Combo",
              "Malaysian"
          ],
          "tags": [

          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "slaString": "35 MINS",
          "lastMileTravel": 7.800000190734863,
          "slugs": {
              "restaurant": "momoz-2nd-stage-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "806, Near ICICI Bank, 7th Cross, 16th Main, 2nd Stage, BTM, Bangalore",
          "locality": "2nd Stage",
          "parentId": 2486,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7300199~p=1~eid=00000189-1322-c923-2663-d7b7002a0160~srvts=1688243194147",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "346",
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 35,
              "lastMileTravel": 7.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.0",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "428",
          "name": "Biryani Pot",
          "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
          "city": "1",
          "area": "Btm Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
          "cuisines": [
              "North Indian",
              "Biryani"
          ],
          "tags": [

          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 8.100000381469727,
          "slugs": {
              "restaurant": "biryani-pot-madiwala-junction-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
          "locality": "Maruti Nagar",
          "parentId": 21798,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "distance",
                      "fee": 9600,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 9600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "9600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "8.1 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "428",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 8.100000381469727,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "IT_IS_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "337335",
          "name": "Kannur food kitchen",
          "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
          "city": "1",
          "area": "BTM Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "a27weqanhnszqiuzsoik",
          "cuisines": [
              "Kerala",
              "Biryani",
              "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 7.800000190734863,
          "slugs": {
              "restaurant": "kannur-food-kitchen-btm-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
          "locality": "1st  Stage",
          "parentId": 114756,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "337335",
              "deliveryTime": 27,
              "minDeliveryTime": 27,
              "maxDeliveryTime": 27,
              "lastMileTravel": 7.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "193210",
          "name": "Chopstick",
          "uuid": "259b62fa-9764-4c6f-b915-0988773dc3e4",
          "city": "1",
          "area": "Btm Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "h7h8vt4y5cur3plpkf1x",
          "cuisines": [
              "Chinese",
              "Thai",
              "Seafood",
              "Asian",
              "Combo",
              "Healthy Food",
              "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "slaString": "31 MINS",
          "lastMileTravel": 7.800000190734863,
          "slugs": {
              "restaurant": "the-chopstick-btm-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "No. 805/A, 16th Mai, 7th Cross , Next to Pizza Hut, Stage 2, BTM Layout, Bangalore, Karnataka",
          "locality": "2nd Stage",
          "parentId": 1783,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7300200~p=4~eid=00000189-1322-c923-2663-d7b8002a046b~srvts=1688243194147",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "193210",
              "deliveryTime": 31,
              "minDeliveryTime": 31,
              "maxDeliveryTime": 31,
              "lastMileTravel": 7.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "594259",
          "name": "Burger King",
          "uuid": "23c84a1b-7e44-4e35-9c4f-1c09e462920c",
          "city": "1",
          "area": "Banashankari",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "tags": [

          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 2.4000000953674316,
          "slugs": {
              "restaurant": "burger-king-banshankari-banashankari",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "Sri Hari Ozone  , Shop No.2, Ground Floor,Plot No.4, Sy No.17/19, 30th Main Road, Opp.KIMS, Kaveri Nagar, Banagirinagar Village,Kathriguppe, Banashankari 3rd Stage, Basavanagudi,Karnataka-560085",
          "locality": "3rd Stage",
          "parentId": 166,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 3300,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 3300,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3300",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "2.4 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "594259",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "lastMileTravel": 2.4000000953674316,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "121603",
          "name": "Kannur Food Point",
          "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
          "city": "1",
          "area": "Tavarekere",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
          "cuisines": [
              "Kerala",
              "Chinese"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 6.400000095367432,
          "slugs": {
              "restaurant": "kannur-food-point-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
          "locality": "SG Palya",
          "parentId": 20974,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 7600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 7600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "7600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "6.4 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "121603",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 6.400000095367432,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "217048",
          "name": "Chinese BAE",
          "uuid": "f053c092-04d2-4551-b081-4449cf1a559f",
          "city": "1",
          "area": "BTM Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "n2lfnd2v4jf4x6l7rnos",
          "cuisines": [
              "Chinese",
              "Thai",
              "Seafood",
              "Asian",
              "Combo",
              "Healthy Food",
              "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 7.800000190734863,
          "slugs": {
              "restaurant": "chinese-bae-btm-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "NO.805/A, 1ST FLOOR, 7TH CROSS, BTM LAYOUT 2ND STAGE, MICO LAYOUT, BANGALORE., B.B.M.P South (Karnataka) - 560076",
          "locality": "2nd Stage",
          "parentId": 9769,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7300201~p=7~eid=00000189-1322-c923-2663-d7b9002a0753~srvts=1688243194147",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "217048",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 7.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "274797",
          "name": "Hotel Empire",
          "uuid": "1426d834-f4de-4491-bb60-03eba1a54053",
          "city": "1",
          "area": "Banashankari",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "vrif6sulxq0gktvkj1oq",
          "cuisines": [
              "North Indian",
              "Kebabs",
              "Biryani"
          ],
          "tags": [

          ],
          "costForTwo": 80000,
          "costForTwoString": "₹800 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 3,
          "slugs": {
              "restaurant": "hotel-empire-banashankari-banashankari",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "NO: 217, 100 FT RING ROAD, BSK 3RD STAGE,BANGALORE. , Basavanagudi , B.B.M.P South(Karnataka)-560085",
          "locality": "3rd Stage",
          "parentId": 475,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 4100,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 4100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "4100",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "274797",
              "deliveryTime": 22,
              "minDeliveryTime": 22,
              "maxDeliveryTime": 22,
              "lastMileTravel": 3,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "298068",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "uuid": "547fc96e-e0c1-4b1b-987a-a7379c307795",
          "city": "1",
          "area": "BTM Layout",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "xhnyfinvgxanmqyxsauv",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 8.399999618530273,
          "slugs": {
              "restaurant": "kwality-walls-btm-btm-2",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "4, 7th Main, N.S. Palya, Near Apollo Pharmacy, B.T.M 2nd Stage, Bangalore, District - Bangalore Urban, STATE - Karnataka",
          "locality": "2nd Stage",
          "parentId": 582,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 9600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 9600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "9600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7352048~p=10~eid=00000189-1322-c923-2663-d7ba002a0a75~srvts=1688243194147",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "8.3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "298068",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 8.399999618530273,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 1000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "588705",
          "name": "La Pino'z Pizza",
          "uuid": "be6a463f-42f2-49d6-a88d-331c92a1a812",
          "city": "1",
          "area": "JP Nagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "w6roonblq3fa5wrtlgys",
          "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 7.099999904632568,
          "slugs": {
              "restaurant": "la-pino'z-pizza-jp-nagar-jp-nagar",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "#309,1ST FLOOR,100 FEET RING ROAD,NEAR DELMIACIRCLE,J P NAGAR,5TH PHASE,BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560078",
          "locality": "5TH Phase",
          "parentId": 4961,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "588705",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 7.099999904632568,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 1000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "609961",
          "name": "Momo Ninja",
          "uuid": "b25f5a34-7fb3-4c24-875c-bd0e1a86471f",
          "city": "1",
          "area": "Tavarekere",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "tqocgtgvqnfuh1rjsvow",
          "cuisines": [
              "Asian",
              "Chinese",
              "Beverages",
              "Desserts"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 6.800000190734863,
          "slugs": {
              "restaurant": "kong’s-kitchen-btm-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 78/29, 1st floor, Balaji Complex, Opp to Prestige St.Johns Wood Apartments, SG Palya, Tavarekere Main rd, 560029",
          "locality": "SG Palya",
          "parentId": 138214,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 7600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 7600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "7600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7275750~p=13~eid=00000189-1322-c923-2663-d7bb002a0d25~srvts=1688243194147",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "6.8 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "609961",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 6.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 50,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "485771",
          "name": "Sree Banashankari Donne Biryani",
          "uuid": "6c73e264-801e-4a0b-928b-8f91ea32cacb",
          "city": "1",
          "area": "Basaveshwara Nagar",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "hrn5r5ghcl7m3piog5iy",
          "cuisines": [
              "Biryani",
              "South Indian",
              "Indian",
              "Chinese",
              "Grill",
              "Kebabs",
              "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 7,
          "slugs": {
              "restaurant": "sree-banashankari-donne-biryani-rajajinagar-rajajinagar",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "#343/344 ground floor 5th main 3rd stage 2nd block basaveshwar Nagar Bengaluru 560079",
          "locality": "2nd block",
          "parentId": 291485,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹600",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "485771",
              "deliveryTime": 27,
              "minDeliveryTime": 27,
              "maxDeliveryTime": 27,
              "lastMileTravel": 7,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 500,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "315409",
          "name": "Keventers - Milkshakes & Desserts",
          "uuid": "bc48119b-bf9c-437d-a2e4-3b56265bc574",
          "city": "1",
          "area": "Banashankari",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "af8216b15abde417bb0e1d8fc44fb877",
          "cuisines": [
              "Beverages",
              "Ice Cream",
              "Desserts",
              "Healthy Food"
          ],
          "tags": [

          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 3,
          "slugs": {
              "restaurant": "keventers-milkshakes-ice-creams-jayanagar-jayanagar",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "Municipal no 217,100ft road,BSK 3rd Stage Bangalore -560085",
          "locality": "3rd Stage",
          "parentId": 268997,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 4100,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 4100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "4100",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7253233~p=22~eid=00000189-1322-c923-2663-d7be002a162e~srvts=1688243194147",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "315409",
              "deliveryTime": 20,
              "minDeliveryTime": 20,
              "maxDeliveryTime": 20,
              "lastMileTravel": 3,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.8",
          "totalRatings": 1000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "94703",
          "name": "Sri Punjabi Dhaba",
          "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
          "city": "1",
          "area": "BTM Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "i53hrycmcn2oehrojag0",
          "cuisines": [
              "North Indian",
              "Biryani",
              "Chinese",
              "Kebabs"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 7.800000190734863,
          "slugs": {
              "restaurant": "sri-punjabi-dhaba-bangalore-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
          "locality": "Cashier Layout",
          "parentId": 21426,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 8600,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 8600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "8600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "7.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "94703",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 7.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.0",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "252618",
          "name": "Al-Bek",
          "uuid": "9cd12cc5-caf6-4db1-99f2-38644395aa67",
          "city": "1",
          "area": "Rajajinagar",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "teg1rujhfwroaoig95qs",
          "cuisines": [
              "Arabian",
              "Tandoor",
              "Biryani"
          ],
          "tags": [

          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 5.900000095367432,
          "slugs": {
              "restaurant": "al-bek-rajajinagar-rajajinagar",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "349/74, 12th Main, 6th BLOCK Opp Mayura Hotel, Bangalore- 560010",
          "locality": "6th Block",
          "parentId": 9911,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "chain": [

          ],
          "feeDetails": {
              "fees": [
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "distance",
                      "fee": 6600,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 6600,
              "message": "",
              "title": "Delivery Charge",
              "amount": "6600",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [

              ],
              "textBased": [

              ],
              "textExtendedBadges": [

              ]
          },
          "lastMileTravelString": "5.9 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "252618",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 5.900000095367432,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 5000,
          "new": false
      },
      "subtype": "basic"
  }
]

const Restrocard = (props) => {
  console.log("props", props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-ldNnZb_CXlYmOVrmh69OrZ1MpK9QnLA9A&usqp=CAU"
        alt="biryani pic"
      />
      <h1>{props?.data?.data?.name}</h1>
      <h4>{props?.data?.data?.area}</h4>
      <h4>{props?.data?.data?.avgRating}</h4>
      <h4>{props?.data?.data?.maxDeliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search"> Search </div>
      <div className="res-container">
        {
          restaurantList && restaurantList.map((item) => {
            return(
              <Restrocard data={item}/>
            )
          })
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
