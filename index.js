function checkInputValue() {
    // Get the input element
    var inputElement = document.getElementById("state");
  
    // Get the value of the input element
    var inputValue = inputElement.value;
  
    // Display the input value in the console
    inputValue=inputValue.toLowerCase();


    if(inputValue==="rajasthan"){
        $(".heading").html("<h2>Desert soil with some proportions of laterite Soil and Mountain Soil </h2>");
        $(".sub").html("<p>Desert soil is mostly sandy soil (90–95%) found in low-rainfall regions. It has a low content of nitrogen and organic matter with very high calcium carbonate and phosphate, thus making it infertile. The amount of calcium is 10 times higher in the lower layer than in the topsoil. The availability of nitrogen in the form of nitrates, using fertilizer and proper irrigation, in addition to the already-present phosphates makes it useful in growing crops such as <em><strong>barley, rape, cotton, wheat, millets, maize, and pulses.</strong></em> For example, the Indira Gandhi canal command area is one of the best examples, showing maximum utility of the desert soils. This soil is susceptible to wind erosion and supports a low density of population. India has approximately 4% of total area covered with desert soil in the regions of Rajasthan, adjoining areas of Punjab and Haryana lying between the Indus and the Aravallis, the Rann of Kuchchh in Gujarat, and coastal regions of Orissa, Tamil Nadu, and Kerala</p>");
    }


    else if(inputValue==="tamil nadu" || inputValue==="puducherry"){
        $(".heading").html("<h2>Red Soil with some proportions of Laterite Soil , Black Soil and Alluvial Soil</h2>");
        $(".sub").html("<p>The color of red soil ranges from red to brown, chocolate, yellow, gray, or sometimes even black. Red soil contains a high percentage of iron content, which is responsible for its color. This soil is deficient in nitrogen, humus, phosphoric acid, magnesium, and lime but fairly rich in potash, with its pH ranging from neutral to acidic. It is formed by the weathering of ancient crystalline and metamorphic rocks, particularly acid granites and gneisses, quartzitic rocks, and felspathic rocks. Chemically, red soil is siliceous and aluminous, with free quartz as sand, but is rich in potassium, ranging from sand to clay with the majority being loamy. The lowermost area of red soil is dark in color and very fertile, while the upper layer is sandy and porous. Thus, proper use of fertilizers and irrigation yields high production of <em><strong>cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes, and fruits</em></strong>. Approximately 10.6% of the total geographical area of India is covered by red soil, including Tamil Nadu, parts of Karnataka, southeastern Maharashtra, eastern Andhra Pradesh and Madhya Pradesh, Orissa, Chhattisgarh, Chota Nagpur (Jharkhand), south Bihar, West Bengal (Birbhum and Bankura), Uttar Pradesh (Mirzapur, Jhansi, Banda, and Hamirpur), Aravallis, eastern Rajasthan, Assam, Nagaland, Manipur, Mizoram, Tripura, and Meghalaya</p>");
    }
    else if(inputValue=="nagaland")
    {     
        $(".heading").html("<h2>Red Soil with some proportions of Alluvial Soil</h2>");
        $(".sub").html("<p>The color of red soil ranges from red to brown, chocolate, yellow, gray, or sometimes even black. Red soil contains a high percentage of iron content, which is responsible for its color. This soil is deficient in nitrogen, humus, phosphoric acid, magnesium, and lime but fairly rich in potash, with its pH ranging from neutral to acidic. It is formed by the weathering of ancient crystalline and metamorphic rocks, particularly acid granites and gneisses, quartzitic rocks, and felspathic rocks. Chemically, red soil is siliceous and aluminous, with free quartz as sand, but is rich in potassium, ranging from sand to clay with the majority being loamy. The lowermost area of red soil is dark in color and very fertile, while the upper layer is sandy and porous. Thus, proper use of fertilizers and irrigation yields high production of <em><strong>cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes, and fruits</em></strong>. Approximately 10.6% of the total geographical area of India is covered by red soil, including Tamil Nadu, parts of Karnataka, southeastern Maharashtra, eastern Andhra Pradesh and Madhya Pradesh, Orissa, Chhattisgarh, Chota Nagpur (Jharkhand), south Bihar, West Bengal (Birbhum and Bankura), Uttar Pradesh (Mirzapur, Jhansi, Banda, and Hamirpur), Aravallis, eastern Rajasthan, Assam, Nagaland, Manipur, Mizoram, Tripura, and Meghalaya</p>");
}

    else if(inputValue==="west bengal"){
        $(".heading").html("<h2>Alluvial Soil mainly along Delta region with some proportions of Laterite Soil and Black Soil</h2>");
        $(".sub").html("<p>Alluvial soils are widespread in the northern plains and river valleys. It covers about 40% of the total land area of the country. These soils are mainly derived from the debris brought down from the Himalayas. In the Peninsular region, they are found in deltas of the east coast and in the river valleys. The colour of the alluvial soil varies from light grey to ash grey. The alluvial soil varies in nature from sandy loam to clay. They are rich in potash but poor in phosphorus.  Two different types of alluvial soils have developed in the Upper and Middle Ganga plains – Khadar and Bhangar.   Khadar is the new alluvium and occupies the flood plains of the rivers. Khadar is enriched with fresh silt deposits every year.  Bhangar is the old alluvium, deposited away from the flood plains.   Both Khadar and Bhangar soils contain concretion (kankars) of impure calcium carbonate.  These soils are more loamy and clayey in the lower and middle Ganga plains and the Brahmaputra valley.   Alluvial soils are intensely cultivated –<strong><em> wheat, maize, sugarcane, pulses, oilseed, etc.</em></strong> are mainly cultivated.</p>");
    }

   
    else if(inputValue==="arunanchal pradesh"){
        $(".heading").html("<h2>Red Soil with some proportions of Alluvial Soil and Mountain Soil</h2>");
        $(".sub").html("<p>The color of red soil ranges from red to brown, chocolate, yellow, gray, or sometimes even black. Red soil contains a high percentage of iron content, which is responsible for its color. This soil is deficient in nitrogen, humus, phosphoric acid, magnesium, and lime but fairly rich in potash, with its pH ranging from neutral to acidic. It is formed by the weathering of ancient crystalline and metamorphic rocks, particularly acid granites and gneisses, quartzitic rocks, and felspathic rocks. Chemically, red soil is siliceous and aluminous, with free quartz as sand, but is rich in potassium, ranging from sand to clay with the majority being loamy. The lowermost area of red soil is dark in color and very fertile, while the upper layer is sandy and porous. Thus, proper use of fertilizers and irrigation yields high production of <em><strong>cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes, and fruits</em></strong>. Approximately 10.6% of the total geographical area of India is covered by red soil, including Tamil Nadu, parts of Karnataka, southeastern Maharashtra, eastern Andhra Pradesh and Madhya Pradesh, Orissa, Chhattisgarh, Chota Nagpur (Jharkhand), south Bihar, West Bengal (Birbhum and Bankura), Uttar Pradesh (Mirzapur, Jhansi, Banda, and Hamirpur), Aravallis, eastern Rajasthan, Assam, Nagaland, Manipur, Mizoram, Tripura, and Meghalaya</p>");
    }

    else if(inputValue==="meghalaya" ){
        $(".heading").html("<h2>Laterite Soil with some proportions of Red Soil and Alluvial Soil</h2>");
        $(".sub").html("<p>This soil is deficient in fertility as a result of extensive leaching. Laterite is thought to have originated in hot and humid tropical environments. Because of the high iron oxide concentration, almost all laterites are rusty-red in color. Laterite soil is very useful for growing rubber, wheat, rice cultivation, pulse cultivation, and coconut farming. In addition, because of the high iron content, this soil is frequently utilized to create bricks. This soil is especially good for growing coffee and tea if good soil conservation practices are used, notably in hilly parts of Kerala, Karnataka, and Tamil Nadu. Also, Laterite soil is very useful for growing cashew nuts in Andhra Pradesh, Tamil Nadu, and Kerala. However, these soils are typically appropriate for growing the majority of dryland crops. It is mainly planted with <strong><em>arecanut, banana, vegetables, tapioca, yams, pineapple, pepper, fruit trees, etc</em></strong>.</p>")
    }


    else if(inputValue==="assam"){
        $(".heading").html("<h2>Alluvial Soil with some proportions of Mountain Soil and Red Soil</h2>");
        $(".sub").html("<p>Alluvial soils are widespread in the northern plains and river valleys. It covers about 40% of the total land area of the country. These soils are mainly derived from the debris brought down from the Himalayas. In the Peninsular region, they are found in deltas of the east coast and in the river valleys. The colour of the alluvial soil varies from light grey to ash grey. The alluvial soil varies in nature from sandy loam to clay. They are rich in potash but poor in phosphorus.  Two different types of alluvial soils have developed in the Upper and Middle Ganga plains – Khadar and Bhangar.   Khadar is the new alluvium and occupies the flood plains of the rivers. Khadar is enriched with fresh silt deposits every year.  Bhangar is the old alluvium, deposited away from the flood plains.   Both Khadar and Bhangar soils contain concretion (kankars) of impure calcium carbonate.  These soils are more loamy and clayey in the lower and middle Ganga plains and the Brahmaputra valley.   Alluvial soils are intensely cultivated –<strong><em> wheat, maize, sugarcane, pulses, oilseed, etc.</em></strong> are mainly cultivated.</p>");
    }


    else if(inputValue==="goa"){
        $(".heading").html("<h2>Laterite Soil with some proportions Alluvial Soil along coastal regions</h2>");
        $(".sub").html("<p>Alluvial soils are widespread in the northern plains and river valleys. It covers about 40% of the total land area of the country. These soils are mainly derived from the debris brought down from the Himalayas. In the Peninsular region, they are found in deltas of the east coast and in the river valleys. The colour of the alluvial soil varies from light grey to ash grey. The alluvial soil varies in nature from sandy loam to clay. They are rich in potash but poor in phosphorus.  Two different types of alluvial soils have developed in the Upper and Middle Ganga plains – Khadar and Bhangar.   Khadar is the new alluvium and occupies the flood plains of the rivers. Khadar is enriched with fresh silt deposits every year.  Bhangar is the old alluvium, deposited away from the flood plains.   Both Khadar and Bhangar soils contain concretion (kankars) of impure calcium carbonate.  These soils are more loamy and clayey in the lower and middle Ganga plains and the Brahmaputra valley.   Alluvial soils are intensely cultivated –<strong><em> wheat, maize, sugarcane, pulses, oilseed, etc.</em></strong> are mainly cultivated.</p>");

    }

    else if(inputValue==="gujarat" || inputValue==="daman and diu" || inputValue==="dadra and nagar haveli"){
        $(".heading").html("<h2>Alluvial Soil mainly along coastel region with some proportions of Desert Soil along Rann of Kutch and Laterite Soil</h2>");
        $(".sub").html("<p>Alluvial soils are widespread in the northern plains and river valleys. It covers about 40% of the total land area of the country. These soils are mainly derived from the debris brought down from the Himalayas. In the Peninsular region, they are found in deltas of the east coast and in the river valleys. The colour of the alluvial soil varies from light grey to ash grey. The alluvial soil varies in nature from sandy loam to clay. They are rich in potash but poor in phosphorus.  Two different types of alluvial soils have developed in the Upper and Middle Ganga plains – Khadar and Bhangar.   Khadar is the new alluvium and occupies the flood plains of the rivers. Khadar is enriched with fresh silt deposits every year.  Bhangar is the old alluvium, deposited away from the flood plains.   Both Khadar and Bhangar soils contain concretion (kankars) of impure calcium carbonate.  These soils are more loamy and clayey in the lower and middle Ganga plains and the Brahmaputra valley.   Alluvial soils are intensely cultivated –<strong><em> wheat, maize, sugarcane, pulses, oilseed, etc.</em></strong> are mainly cultivated.</p>");
    }


    else if(inputValue==="kerala"){
        $(".heading").html("<h2>Red Soil with some proportions of Laterite Soil and Alluvial Soil along coastel regions</h2>");
        $(".sub").html("<p>The color of red soil ranges from red to brown, chocolate, yellow, gray, or sometimes even black. Red soil contains a high percentage of iron content, which is responsible for its color. This soil is deficient in nitrogen, humus, phosphoric acid, magnesium, and lime but fairly rich in potash, with its pH ranging from neutral to acidic. It is formed by the weathering of ancient crystalline and metamorphic rocks, particularly acid granites and gneisses, quartzitic rocks, and felspathic rocks. Chemically, red soil is siliceous and aluminous, with free quartz as sand, but is rich in potassium, ranging from sand to clay with the majority being loamy. The lowermost area of red soil is dark in color and very fertile, while the upper layer is sandy and porous. Thus, proper use of fertilizers and irrigation yields high production of <em><strong>cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes, and fruits</em></strong>. Approximately 10.6% of the total geographical area of India is covered by red soil, including Tamil Nadu, parts of Karnataka, southeastern Maharashtra, eastern Andhra Pradesh and Madhya Pradesh, Orissa, Chhattisgarh, Chota Nagpur (Jharkhand), south Bihar, West Bengal (Birbhum and Bankura), Uttar Pradesh (Mirzapur, Jhansi, Banda, and Hamirpur), Aravallis, eastern Rajasthan, Assam, Nagaland, Manipur, Mizoram, Tripura, and Meghalaya</p>");
    }

    else if(inputValue==="karnataka"){
        $(".heading").html("<h2>Red Soil with some proportions of Laterite Soil Black Soil and Alluvial Soil along coastel regions</h2>");
        $(".sub").html("<p>The color of red soil ranges from red to brown, chocolate, yellow, gray, or sometimes even black. Red soil contains a high percentage of iron content, which is responsible for its color. This soil is deficient in nitrogen, humus, phosphoric acid, magnesium, and lime but fairly rich in potash, with its pH ranging from neutral to acidic. It is formed by the weathering of ancient crystalline and metamorphic rocks, particularly acid granites and gneisses, quartzitic rocks, and felspathic rocks. Chemically, red soil is siliceous and aluminous, with free quartz as sand, but is rich in potassium, ranging from sand to clay with the majority being loamy. The lowermost area of red soil is dark in color and very fertile, while the upper layer is sandy and porous. Thus, proper use of fertilizers and irrigation yields high production of <em><strong>cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes, and fruits</em></strong>. Approximately 10.6% of the total geographical area of India is covered by red soil, including Tamil Nadu, parts of Karnataka, southeastern Maharashtra, eastern Andhra Pradesh and Madhya Pradesh, Orissa, Chhattisgarh, Chota Nagpur (Jharkhand), south Bihar, West Bengal (Birbhum and Bankura), Uttar Pradesh (Mirzapur, Jhansi, Banda, and Hamirpur), Aravallis, eastern Rajasthan, Assam, Nagaland, Manipur, Mizoram, Tripura, and Meghalaya</p>");
    }


    else if(inputValue==="maharashtra"){
        $(".heading").html("<h2>Laterite Soil with some proportions of Red Soil along Western Gahts</h2>");
        $(".sub").html("<p>This soil is deficient in fertility as a result of extensive leaching. Laterite is thought to have originated in hot and humid tropical environments. Because of the high iron oxide concentration, almost all laterites are rusty-red in color. Laterite soil is very useful for growing rubber, wheat, rice cultivation, pulse cultivation, and coconut farming. In addition, because of the high iron content, this soil is frequently utilized to create bricks. This soil is especially good for growing coffee and tea if good soil conservation practices are used, notably in hilly parts of Kerala, Karnataka, and Tamil Nadu. Also, Laterite soil is very useful for growing cashew nuts in Andhra Pradesh, Tamil Nadu, and Kerala. However, these soils are typically appropriate for growing the majority of dryland crops. It is mainly planted with <strong><em>arecanut, banana, vegetables, tapioca, yams, pineapple, pepper, fruit trees, etc</em></strong>.</p>")
    }

    else if(inputValue==="uttar pradesh" || inputValue==="bihar" || inputValue==="punjab" || inputValue==="haryana" || inputValue==="delhi" ||  inputValue==="chandigarh"){
        $(".heading").html("<h2>Alluvial Soil</h2>");
        $(".sub").html("<p>Alluvial soils are widespread in the northern plains and river valleys. It covers about 40% of the total land area of the country. These soils are mainly derived from the debris brought down from the Himalayas. In the Peninsular region, they are found in deltas of the east coast and in the river valleys. The colour of the alluvial soil varies from light grey to ash grey. The alluvial soil varies in nature from sandy loam to clay. They are rich in potash but poor in phosphorus.  Two different types of alluvial soils have developed in the Upper and Middle Ganga plains – Khadar and Bhangar.   Khadar is the new alluvium and occupies the flood plains of the rivers. Khadar is enriched with fresh silt deposits every year.  Bhangar is the old alluvium, deposited away from the flood plains.   Both Khadar and Bhangar soils contain concretion (kankars) of impure calcium carbonate.  These soils are more loamy and clayey in the lower and middle Ganga plains and the Brahmaputra valley.   Alluvial soils are intensely cultivated –<strong><em> wheat, maize, sugarcane, pulses, oilseed, etc.</em></strong> are mainly cultivated.</p>");
    }


    else if(inputValue==="uttarakhand"  || inputValue==="andaman and nicobar islands" || inputValue==="jammu and kashmir" || inputValue==="ladakh" || inputValue==="himanchal pradesh"  || inputValue==="sikkim" ){
        $(".heading").html("<h2>Mountain Soil</h2>");
        $(".sub").html("<p>Mountain soils occur not only at higher elevations, but also at lower elevations that have sufficient rainfall. They are formed by the deposition of organic matter derived from forest growth and are heterogeneous in nature, depending on parent rocks, ground configuration, and climate. They are generally infertile for the production of field crops, but useful for supplying forest products, such as timber and fuel. They are rich in humus, but are deficient in potash, phosphorus, and lime; thus, they require a large amount of fertilizers for plantations of <em><strong>tea, coffee, spices, and tropical fruits .</strong></em> These soils occupy approximately 8.7% of the total land area of India, including the Himalayan region of Jammu and Kashmir, Himachal Pradesh, and Uttaranchal, and also some parts of the Western and Eastern Ghats and the Peninsular plateau. Some parts of Karnataka, Tamil Nadu, and Kerala also contain these soils</p>")
    }


    else if(inputValue==="odisha"  || inputValue==="chhattisgarh"  || inputValue==="jharkhand"  || inputValue==="mizoram"  || inputValue==="manipur" || inputValue==="tripura"){
        $(".heading").html("<h2>Red Soil</h2>");
        $(".sub").html("<p>The color of red soil ranges from red to brown, chocolate, yellow, gray, or sometimes even black. Red soil contains a high percentage of iron content, which is responsible for its color. This soil is deficient in nitrogen, humus, phosphoric acid, magnesium, and lime but fairly rich in potash, with its pH ranging from neutral to acidic. It is formed by the weathering of ancient crystalline and metamorphic rocks, particularly acid granites and gneisses, quartzitic rocks, and felspathic rocks. Chemically, red soil is siliceous and aluminous, with free quartz as sand, but is rich in potassium, ranging from sand to clay with the majority being loamy. The lowermost area of red soil is dark in color and very fertile, while the upper layer is sandy and porous. Thus, proper use of fertilizers and irrigation yields high production of <em><strong>cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes, and fruits</em></strong>. Approximately 10.6% of the total geographical area of India is covered by red soil, including Tamil Nadu, parts of Karnataka, southeastern Maharashtra, eastern Andhra Pradesh and Madhya Pradesh, Orissa, Chhattisgarh, Chota Nagpur (Jharkhand), south Bihar, West Bengal (Birbhum and Bankura), Uttar Pradesh (Mirzapur, Jhansi, Banda, and Hamirpur), Aravallis, eastern Rajasthan, Assam, Nagaland, Manipur, Mizoram, Tripura, and Meghalaya</p>");
    }

    else if(inputValue==="madhya pradesh"  || inputValue==="telangana" ){
        $(".heading").html("<h2>Laterite Soil</h2>");
        $(".sub").html("<p>This soil is deficient in fertility as a result of extensive leaching. Laterite is thought to have originated in hot and humid tropical environments. Because of the high iron oxide concentration, almost all laterites are rusty-red in color. Laterite soil is very useful for growing rubber, wheat, rice cultivation, pulse cultivation, and coconut farming. In addition, because of the high iron content, this soil is frequently utilized to create bricks. This soil is especially good for growing coffee and tea if good soil conservation practices are used, notably in hilly parts of Kerala, Karnataka, and Tamil Nadu. Also, Laterite soil is very useful for growing cashew nuts in Andhra Pradesh, Tamil Nadu, and Kerala. However, these soils are typically appropriate for growing the majority of dryland crops. It is mainly planted with <strong><em>arecanut, banana, vegetables, tapioca, yams, pineapple, pepper, fruit trees, etc</em></strong>.</p>")
    }

    
    else{
        $(".heading").html(" ");
        $(".sub").html("Kindly enter valid state name!");
    }
        
} 


document.addEventListener("keydown",function(e){
    if(e.key==="Enter")
    checkInputValue();
    });


