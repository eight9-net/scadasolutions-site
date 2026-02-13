<script setup>
  import ContactButton from '../components/ContactButton.vue';
  import PageHero from '../components/PageHero.vue';
  import ContentFullSection from '../components/ContentFullSection.vue';
  import ContentRightSection from '../components/ContentRightSection.vue';
  import Gallery from '../components/Gallery.vue';
  import ListItem from '../components/ListItem.vue';

</script>

<template>
  <PageHero title="Wind Energy Tutorial" />

  <ContentRightSection
    name="wind-energy-tutorial-intro"
    id="WindEnergyTutorialIntro"
    image="turbines-clouds.webp"
    imageClass="w-full min-w-[600px] h-auto"
    title="What is Wind Energy"
    buttonText="Contact Us"
    bgClasses="bg-cover bg-contain"
  >
    <p class="mx-auto my-10">
      In reality, wind energy is a converted form of solar energy. The sun's radiation heats different parts of the earth at different rates, most notably during the day and night, but also when different surfaces (for example, water and land) absorb or reflect at different rates. This, in turn, causes portions of the atmosphere to warm differently. Hot air rises, reducing the atmospheric pressure at the earth's surface, and cooler air is drawn in to replace it. The result is wind.
    </p>
    <p class="mx-auto my-10">
      Air has mass, and when it is in motion, it contains the energy of that motion (kinetic energy"). Some portion of that energy can be converted into other forms of mechanical force or electricity that we can use to perform work.
    </p>
  </ContentRightSection>

  <section class="pt-10 my-10 scada-section">
    <div class="scroll-target" id="WindEnergyTutorialWhat">&nbsp;</div>
    <div class="mx-auto scada-container text-base/8">

      <div class="grid grid-cols-1 gap-4 align-top md:grid-cols-2">
        <div class="w-auto mx-10 py-15">
          <div class="my-5 ">
            <h2 class="mb-10 text-3xl font-normal text-left headline md:text-4xl">What is a Wind Turbine, and how does it work?</h2>
            <p class="mx-auto mb-10">
              A wind energy system transforms the kinetic energy of the wind into mechanical or electrical energy that can be harnessed for practical use. Mechanical energy is most commonly used for pumping water in rural or remote locations—the "farm windmill" still seen in many rural areas of the U.S. is a mechanical wind pumper—but it can also be used for many other purposes (grinding grain, sawing, pushing a sailboat, etc.). Wind electric turbines generate electricity for homes and businesses and for sale to utilities.
            </p>
            <p class="mx-auto mb-10">
              There are two basic designs of wind electric turbines: vertical-axis, or "egg-beater" style, and horizontal-axis (propeller-style) machines. Horizontal-axis wind turbines are most common today, constituting nearly all of the "utility-scale" (100 kilowatts, kW, capacity, and larger) turbines in the global market.
            </p>
          </div>

          <ContactButton />
        </div>

        <div class="w-auto max-w-2xl mx-auto my-10 max-w-[500px]">
          <Gallery
            :images="[
              { src: 'turbine-components.webp', alt: 'Turbine Components' },
              { src: 'wind-components.jpg', alt: 'Wind Components' },
            ]"
            cols="1"
            :labels="true"
          />
        </div>

      </div>
    </div>
  </section>


  <section class="pt-10 my-10 scada-section">
    <div class="scroll-target" id="WindEnergyTutorialHow">&nbsp;</div>
    <div class="mx-auto scada-container text-base/8">

      <div class="grid grid-cols-1 gap-4 align-top md:grid-cols-2">
        <div class="w-auto mx-10 my-5">

          <h2 class="mb-10 text-3xl font-normal text-left headline md:text-4xl">How Turbines Work</h2>

          <div class="w-auto max-w-2xl mx-10 mx-auto my-10 max-w-[500px]">
            <Gallery
              :images="[
                { src: 'turbine-scales.svg', alt: 'Turbine Scales' },
              ]"
              cols="1"
            />
          </div>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            What do Turbine subsystems include?
          </h4>
          <p class="mx-auto mb-10">
            <ListItem>They include a rotor and blades, which convert the wind's energy into rotational shaft energy;</ListItem>
            <ListItem>a nacelle (enclosure) containing a drive train, usually including a gearbox* and a generator;</ListItem>
            <ListItem>a tower, to support the rotor and drive train; and</ListItem>
            <ListItem>electronic equipment such as controls, electrical cables, ground support equipment, and interconnection equipment.</ListItem>
          </p>
          <p class="mx-auto mb-10">
            * Some turbines do not require a gearbox Wind turbines vary in size. This chart depicts a variety of historical turbine sizes and the amount of electricity they are each capable of generating (the turbine's capacity, or power rating).
          </p>
          <p>The electricity generated by a utility-scale wind turbine is normally collected and fed into utility power lines, where it is mixed with electricity from other power plants and delivered to utility customers. Today (August 2005), turbines with capacities as large as 5,000 kW (5 MW) are being tested.</p>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            What are wind turbines made of?
          </h4>
          <p class="mx-auto mb-10">
            The towers are mostly tubular and made of steel. The blades are made of fiberglass-reinforced polyester or wood epoxy.
          </p>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            How big is a wind turbine?
          </h4>
          <p class="mx-auto mb-10">
            Utility-scale wind turbines for land-based wind farms come in various sizes, with rotor diameters ranging from about 50 meters to about 90 meters, and with towers of roughly the same size. A 90-meter machine, definitely at the large end of the scale at this writing, with a 90-meter tower would have a total height from the tower base to the tip of the rotor of approximately 135 meters (442 feet).
          </p>
          <p class="mx-auto mb-10">
            Offshore turbine designs now under development will have larger rotors—at the moment, the largest has a 110-meter rotor diameter—because it is easier to transport large rotor blades by ship than by land.
          </p>
          <p class="mx-auto mb-10">
            Small wind turbines intended for residential or small business use are much smaller. Most have rotor diameters of 8 meters or less and would be mounted on towers of 40 meters in height or less.
          </p>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            How much electricity can one wind turbine generate? aaa
          </h4>
          <p class="mx-auto mb-10">
            The ability to generate electricity is measured in watts. Watts are very small units, so the terms kilowatt (kW, 1,000 watts), megawatt (MW, 1 million watts), and gigawatt (pronounced "jig-a-watt," GW, 1 billion watts) are most commonly used to describe the capacity of generating units like wind turbines or other power plants.
          </p>
          <p class="mx-auto mb-10">
            Electricity production and consumption are most commonly measured in kilowatt-hours (kWh). A kilowatt-hour means one kilowatt (1,000 watts) of electricity produced or consumed for one hour. One 50-watt light bulb left on for 20 hours consumes one kilowatt-hour of electricity (50 watts x 20 hours = 1,000 watt-hours = 1 kilowatt-hour).
          </p>
          <p class="mx-auto mb-10">
            The output of a wind turbine depends on the turbine's size and the wind's speed through the rotor. Wind turbines being manufactured now have power ratings ranging from 250 watts to 5 megawatts (MW). Example: A 10-kW wind turbine can generate about 10,000 kWh annually at a site with wind speeds averaging 12 miles per hour, or about enough to power a typical household. A 5-MW turbine can produce more than 15 million kWh in a year—enough to power more than 1,400 households. The average U.S. household consumes about 10,000 kWh of electricity each year.
          </p>
          <p class="mx-auto mb-10">
            Example: A 250-kW turbine installed at the elementary school in Spirit Lake, Iowa, provides an average of 350,000 kWh of electricity per year, more than is necessary for the 53,000-square-foot school. Excess electricity fed into the local utility system earned the school $25,000 in its first five years of operation. The school uses electricity from the utility at times when the wind does not blow. This project has been so successful that the Spirit Lake school district has since installed a second turbine with a capacity of 750 kW. (For further information on this project, see at the Web site of the International Council for Local Environmental Initiatives.)
          </p>
          <p class="mx-auto mb-10">
            Wind speed is a crucial element in projecting turbine performance, and a site's wind speed is measured through wind resource assessment prior to a wind system's construction. Generally, an annual average wind speed greater than four meters per second (m/s) (9 mph) is required for small wind electric turbines (less wind is required for water-pumping operations). Utility-scale wind power plants require a minimum average wind speed of 6 m/s (13 mph).
          </p>
          <p class="mx-auto mb-10">
            The power available in the wind is proportional to the cube of its speed, which means that doubling the wind speed increases the available power by a factor of eight. Thus, a turbine operating at a site with an average wind speed of 12 mph could, in theory, generate about 33% more electricity than one at an 11-mph site because the cube of 12 (1,768) is 33% larger than the cube of 11 (1,331). (In the real world, the turbine will not produce quite that much more electricity, but it will still generate much more than the 9% difference in wind speed.) The important thing to understand is that what seems like a small difference in wind speed can mean a large difference in available energy and in electricity produced, and therefore, a large difference in the cost of the electricity generated. Also, there is little energy to be harvested at very low wind speeds (6-mph winds contain less than one-eighth the energy of 12-mph winds).
          </p>

        </div>
        <div class="w-auto mx-10">

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            How many turbines does it take to make one megawatt (MW)?
          </h4>
          <p class="mx-auto mb-10">
            Most manufacturers of utility-scale turbines offer machines in the 700-kW to 2.5-MW range. Ten 700-kW units would make a 7-MW wind plant, while ten 2.5MW machines would make a 25-MW facility. In the future, machines of larger size will be available, although they will probably be installed offshore, where larger transportation and construction equipment can be used. Units up to 5 MW in capacity are now under development.
          </p>

          <p class="mx-auto mb-10">
            How many homes can one megawatt of wind energy supply?
          </p>
          <p class="mx-auto mb-10">
            An average U.S. household uses about 10,655 kilowatt-hours (kWh) of electricity each year. One megawatt of wind energy can generate from 2.4 to more than 3 million kWh annually. Therefore, a megawatt of wind generates about as much electricity as 225 to 300 households use. It is important to note that since the wind does not blow all of the time, it cannot be the only power source for that many households without some form of storage system. The "number of homes served" is just a convenient way to translate a quantity of electricity into a familiar term that people can understand. Typically, storage is not needed because wind generators are only part of the power plants on a utility system, and other fuel sources are used when the wind is not blowing. According to the U.S. Department of Energy, "When wind is added to a utility system, no new backup is required to maintain system reliability." Wind Energy Myths, Wind Powering America Fact Sheet Series.
          </p>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            What is a wind power plant?
          </h4>
          <p class="mx-auto mb-10">
            The most economical application of wind electric turbines is in groups of large machines (660 kW and up), called "wind power plants" or "wind farms." For example, a 107-MW wind farm near the community of Lake Benton, Minn., consists of turbines sited far apart on farmland along windy Buffalo Ridge. The wind farm generates electricity while agricultural use continues undisturbed.
          </p>
          <p class="mx-auto mb-10">
            Wind plants can range in size from a few megawatts to hundreds of megawatts in capacity. Wind power plants are "modular," which means they consist of small individual modules (the turbines) and can easily be made larger or smaller as needed. Turbines can be added as electricity demand grows. Today, a 50-MW wind farm can be completed in 18 months to two years. Most of that time is needed for measuring the wind and obtaining construction permits; the wind farm itself can be built in less than six months.
          </p>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            What is a "capacity factor"?
          </h4>
          <p class="mx-auto mb-10">
            The capacity factor is one element in measuring the productivity of a wind turbine or any other power production facility. It compares the plant's actual production over a given period of time with the amount of power the plant would have produced if it had run at full capacity for the same amount of time. Capacity Factor = Actual amount of power produced over time/Power that would have been produced if turbine operated at maximum output 100% of the time A conventional utility power plant uses fuel, so it will normally run much of the time unless it is idled by equipment problems or for maintenance. A capacity factor of 40% to 80% is typical for conventional plants. A wind plant is "fueled" by the wind, which blows steadily at times and not at all at other times. Although modern utility-scale wind turbines typically operate 65% to 90% of the time, they often run at less than full capacity. Therefore, a capacity factor of 25% to 40% is common, although they may achieve higher capacity factors during windy weeks or months. It is important to note that while capacity factor is almost entirely a matter of reliability for a fueled power plant, it is not for a wind plant; for a wind plant, it is a matter of economical turbine design. With a very large rotor and a very small generator, a wind turbine would run at full capacity whenever the wind blew and would have a 60–80% capacity factor, but it would produce very little electricity. The most electricity per dollar of investment is gained by using a larger generator and accepting the fact that the capacity factor will be lower as a result. Wind turbines are fundamentally different from fueled power plants in this respect. If a wind turbine's capacity factor is 33%, doesn't that mean it is only running one-third of the time? No. A wind turbine at a typical location in the Midwestern U.S. should run about 65–90% of the time. However, much of the time it will be generating at less than full capacity (see previous answer), making its capacity factor lower.
          </p>


          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            What is "availability" or "availability factor"?
          </h4>
          What is "availability" or "availability factor"?
          <p class="mx-auto mb-10">
            The availability factor (or just "availability") is a measurement of the reliability of a wind turbine or other power plant. It refers to the percentage of time that a plant is ready to generate (that is, not out of service for maintenance or repairs). Modern wind turbines have an availability of more than 98%—higher than most other types of power plants. After more than two decades of constant engineering refinement, today's wind machines are highly reliable.
          </p>

          <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
            Why might you see wind turbines not turning?
          </h4>
          <p class="mx-auto mb-10">
            You occasionally observe some of the turbines in a windfarm not turning while most are operating.
          </p>
          <p class="mx-auto mb-4">
            There are a number of possible reasons for this:
          </p>
          <p class="mx-auto mb-10">
            <ListItem>The wind is not always the same across all parts of a windfarm. In light winds, some turbines may not be sensing sufficient wind to start operation (about 7 mph).</ListItem>
            <ListItem>The turbine may be out of service for maintenance. While the wind turbines operated and maintained by enXco are available to generate energy over 98% of the time, like all machinery, wind turbines require maintenance to function properly.</ListItem>
            <ListItem>The utility may request that the windfarm reduce energy production for short periods of time. This is accomplished by shutting down some of the wind turbines.</ListItem>
          </p>


        </div>
      </div>
    </div>
  </section>


  <ContentFullSection
    name="wind-energy-tutorial-facts"
    id="Facts"
    image=""
    title="Wind Facts"
    contentClasses="text-left text-black"
    containerClasses="container mx-auto"
    bgClasses="bg-white"
    backdropClasses=""
    :button="false"
  >
    <h4 class="mt-10 mb-5 text-xl font-bold text-blue-400 headline">
      Did you know?
    </h4>
    <p class="mx-auto mb-10">
      <ListItem itemClasses="mt-5">Investment in wind in the US grew from $700 million in 2004 to $18 billion in 2008 ($48 billion worldwide)</ListItem>
      <ListItem itemClasses="mt-5">The US is the world leader in new installations (8,358 MW), total MW (25,000+) and annual output</ListItem>
      <ListItem itemClasses="mt-5">Wind was 42% of power capacity (MW) added in the US in 2008, more than any other form of power generation, including natural gas (net of retirements)</ListItem>
      <ListItem itemClasses="mt-5">In 2008, 35,000 jobs were added in the wind industry, raising the total to more than 85,000</ListItem>
      <ListItem itemClasses="mt-5">Over 70 new manufacturing plants or expansions were announced or built since January 2007 in 21 states</ListItem>
      <ListItem itemClasses="mt-5">A 2008 study by the Department of Energy showed it is technically feasible to produce 20% of electricity needs through wind power by 2030</ListItem>
      <ListItem itemClasses="mt-5">Cumulatively, the 20% wind scenario would avoid the consumption of 4 trillion gallons of water through 2030</ListItem>
      <ListItem itemClasses="mt-5">The 20% wind scenario cuts electric sector water consumption by 17% in 2030</ListItem>
      <ListItem itemClasses="mt-5">Each wind turbine provides farm or ranch income annually—$2,000–4,000 per megawatt—and uses only 2-5% of the land for turbines and access roads.</ListItem>
      <ListItem itemClasses="mt-5">Each megawatt (MW) of wind energy capacity installed in the U.S. provides 2.5–3 job-years of employment.</ListItem>
      <ListItem itemClasses="mt-5">In 2006, U.S. wind farms will be saving over 0.5 billion cubic feet of natural gas per day.</ListItem>
      <ListItem itemClasses="mt-5">To generate the same amount of electricity as a single 1-megawatt (MW) wind turbine, a traditional fossil fuel or nuclear power plant requires, on average, withdrawing about 60 million gallons of water per year from a stream or river.</ListItem>
      <ListItem itemClasses="mt-5">To generate the same amount of electricity as today's U.S. wind turbine fleet (6,740 MW), it would require burning 9 million tons of coal (a line of 10-ton trucks 3,437 miles long, from Seattle to Miami) or 28 million barrels of oil each year.</ListItem>
      <ListItem itemClasses="mt-5">Wind energy could provide 6% of our nation's electricity, or about the same as hydropower, by 2020 and 20% by 2030.</ListItem>
      <ListItem itemClasses="mt-5">Up to 2,500 megawatts (MW) of new wind energy capacity will be installed in 2005.</ListItem>
      <ListItem itemClasses="mt-5">A New York study found that if wind energy supplied 10% (3,300 MW) of the state's peak electricity demand, 65% of the energy it displaced would come from natural gas, 15% from coal, 10% from oil, and 10% from electricity imports.</ListItem>
      <ListItem itemClasses="mt-5">As many as 215,000 new jobs would be created by adding 50,000 MW of new wind installations in the U.S.—a $50 billion investment that could provide electricity for as many as 15 million homes with 39 million people.</ListItem>
    </p>
  </ContentFullSection>

  <ContentFullSection
    name="wind-energy-tutorial-glossary"
    id="Glossary"
    image=""
    title="Glossary"
    contentClasses="text-left text-black"
    containerClasses="container mx-auto"
    bgClasses="bg-white"
    backdropClasses=""
    :button="false"
  >
  <p class="mx-auto mb-10">
    <ListItem itemClasses="mt-5"><span class="font-bold">Annual Energy Production:</span> <span>The calculated or measured energy delivered by a wind turbine generator (WTG) or small wind turbine (SWT).</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Alternating current (AC):</span> <span>An electrical current whose direction reverses periodically, usually many times per second. The world's electrical systems use AC current rated at 120 V and 60 cycles per second (North America and others) or 230 V and 50 Hz (Europe and others).</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Ampere-hour:</span> <span>A unit for the quantity of electricity supplied or used at some fixed (usually dc) voltage. Obtained by integrating current flow in amperes over time in hours. Multiplying by the voltage gives the energy exchanged. Used as a measure of battery capacity.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Annual mean wind speed:</span> <span>Calculated as the average of short periods, e.g., 10-minute averages.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Average wind speed:</span> <span>The mean wind speed over a specified period of time. For example, for assessing a horizontal axis wind turbine power curve, (i) the unperturbed wind speed is measured at hub height and then averaged within successive periods of 10 minutes, and (ii) the wind turbine power is similarly averaged within concurrent periods.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Betz limit:</span> <span>The theoretical maximum amount of energy that a perfect wind turbine can extract from the wind approaching its rotor, which Betz calculated as 59% of wind kinetic energy. In practice, efficient wind turbines have efficiencies of about 70% of this Betz criterion.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Brake:</span> <span>A device capable of reducing or stopping the rotor speed.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Budget Energy:</span> <span>The budgeted energy for a wind plant is usually defined per month.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Capacity Factor:</span> <span>The percent of actual energy for a wind turbine versus the rated maximum power over a specific time period.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Commercial Availability (CA):</span> <span>Actual Energy / (Actual Energy + Commercial Lost Energy)</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Data Capture:</span> <span>The percent of time that data is available for a turbine or meteorological station.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Direct current (DC):</span> <span>An electrical current flowing in one direction only (i.e., not AC), defined as from positive to negative voltage. Typical sources of DC current are batteries of electrochemical cells, photovoltaic cells, and rectifiers of AC. DC current has to be transformed to AC at mains voltage through an inverter for most conventional household appliances.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Direct drive:</span> <span>A wind turbine whose rotor shaft is directly connected to the electrical generator shaft, i.e., without an intermediate gearbox.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Downwind:</span> <span>The direction in which the wind is blowing, e.g., the leeside, is downwind.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Equivalent Availability Factor (EAF):</span> <span>The percent of time that a turbine is available to produce energy due to planned and unplanned outages that are within the plant's control. Excludes non-operating conditions (i.e., high wind shutdown, untwisting, high or low ambient temperature) and outages outside of the plant's control, such as force majeure, curtailment, utility outages, and wake management. Base hours are the total hours for the time period, less any missing data hours. EAF = 100 * (1 - (Plant Planned Outage Hours + Plant Unplanned Outage Hours) / Base Hours)</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Equivalent Forced Outage Rate (EFOR):</span> <span>The percent of time that a turbine is unavailable to produce energy due to forced outage conditions that are within the plant's control. Excludes planned outages, non-operating conditions (i.e., high wind shutdown, untwisting, high or low ambient temperature), and outages outside of the plant's control, such as force majeure, curtailment, utility outages, and wake management. Base hours are the total hours for the time period, less any missing data hours. EFOR = 100 * Plant Forced Outage Hours / Base Hours</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Expected Energy:</span> <span>The expected energy is based on actual wind speed and the theoretical power curve, adjusted for actual air density. When using the turbine anemometer wind speed, free-stream adjustments shall be applied as necessary.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Free wheeling mode:</span> <span>Condition of a wind turbine that is rotating a little over its rated rpm and not generating shaft power. This is only achieved with controlled feathering or stalling regulation systems.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Gearbox:</span> <span>A mechanical assembly with an input and an output shaft to house gears. The gearbox is positioned between the main shaft and the electrical generator, thus matching the rotor speed (say, 60 rpm) to the recommended speed of the generator (say, 1,500 rpm).</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Gross Availability (GA):</span> <span>Actual Energy / (Actual Energy + Gross Lost Energy)</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Hub:</span> <span>The central fixture of a HAWT rotor, to which the blades of a wind turbine are attached. If the blades are firmly bolted to the hub, the rotor is called 'fixed pitch'. However, blades can have a degree of freedom to turn (pitch) along their longitudinal axis by interposing a rotating device, ball bearings, slewing rings, or turntables. The rotor is then called 'variable pitch'.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Idling:</span> <span>Condition of a wind turbine that is rotating slowly and not producing power.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Inverter:</span> <span>An electronic device that converts direct current (DC) to alternating current (AC) at the required frequency (e.g., 50 Hz for grid electricity in Europe.)</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">kW Kilowatt:</span> <span>1000 watts is a measure of power (energy per unit time).</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">kWh Kilowatt Hour:</span> <span>1000 Watts for one hour; energy unit (energy per unit time, multiplied by time = energy). The energy dissipated by using one kW in one hour.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Lost Energy:</span> <span>The expected energy is lost while a turbine is unavailable to produce energy and there is sufficient wind for generation.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Main shaft:</span> <span>The shaft connecting the rotor hub to the gearbox or, with direct drive, to the generator.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Nacelle:</span> <span>The body (including frame and cover) that contains the main bearings, brakes, gearbox, generator, pitch controllers, hydraulic equipment, etc. of a wind turbine.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">On-Line Efficiency:</span> <span>The percent of actual energy produced at the turbine is divided by the expected energy for the turbine when the turbine is online.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Park Efficiency:</span> <span>The percent of actual energy delivered to the interconnect divided by expected energy.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Power coefficient:</span> <span>The ratio of the power extracted by a wind turbine to the power available in the wind stream ahead of the rotor area at a specified wind speed.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Power curve:</span> <span>A graph showing a wind turbine's power output as a function of wind speed.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Rated output capacity:</span> <span>The output power of a wind machine operating at the rated wind speed.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Rotor:</span> <span>The main rotating drive mechanism of a wind turbine includes the blades and blade hub.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Rotor diameter:</span> <span>The outer diameter of the rotor. That is approximately twice the blade length.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Slip ring assembly:</span> <span>A device for making electrical connections between stationary and rotating parts, e.g., in generators, for connecting monitoring sensors to a rotor, or for connecting mains cables from a rotating nacelle to within a tower. Usually it includes a bronze or other conducting alloy circular component over which carbon conducting brushes move with minimal friction.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Swept area:</span> <span>The area swept by the turbine rotor is, for common HAWT, A=pR2, where R is the radius of the rotor.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Small Wind Turbine (SWT):</span> <span>According to the IEC 61400 standard, SWTs are wind turbines of swept area less than 200 m2, i.e., HAWT less than 16 m in diameter. However, this definition is not universal.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Turbine Efficiency:</span> <span>The percent of actual energy produced at the turbine is divided by the expected energy for the turbine.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Turbulence:</span> <span>Change in wind speed and direction over periods of seconds. Turbulence is an intrinsic property of wind that is increased by obstacles.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Turbulence intensity:</span> <span>Ratio of the standard deviation of the wind speed to the mean wind speed, as determined from the same set of measured data on wind speed for a specified period of time.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Upwind:</span> <span>On the same side as the direction from which the wind is blowing: windward.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">VAWT:</span> <span>Vertical-axis wind turbine.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Wind shear:</span> <span>The increase in wind speed above the ground as a function of height. A logarithmic expression is sometimes used to characterize wind shear.</span></ListItem>
    <ListItem itemClasses="mt-5"><span class="font-bold">Yaw:</span> <span>The movement of the tower top (nacelle) of a HAWT turns the turbine rotor with respect to the oncoming wind.</span></ListItem>


  </p>
  </ContentFullSection>
</template>

<style scoped>

</style>
