<h1> <p align="center">  Texas Voting Database  </p> </h1>
<h2> <p align="center">County Data <a href="https://zane2231.github.io/Project-3-group-4/DashbardTexasCounty.html">WEBSITE</a><h2>
Proposal: We are making a database for Texans to reference for information on voting statistics in Texas. This database will include a map with voting locations and general stats about Texas voters. 

<h3>Target Audience: Texan voters, educational institutions, lawmakers, federal agencies

Team Members: Sunny Bhatt, Kristal Conception, Zane Rios, Chloe Valverde

What/Why: Texas is an immense state full of varying ideologies and people. With this vast amount of space, it is paramount to know where you can vote. It is also good to know where your area stands politically, especially if you are deciding to move to an area where it would not suit your standards.</h3> 
  
 <p align="center"> Final Report 10/16/2022 </p>

<h3>At the outset, we had to find many trusted sources since political data tends to be faked. While they were not hard to find, it was tricky to gather the data in a concise way since there was an overabundance of data that we did not actually need. Interestingly, one of the datasets was obtained by one of our team members contacting the secretary of state and they agreed to share some of the voting datasets with us. 

After the datasets were acquired, we quickly went to cleaning and sorting them through jupyter notebook, pgadmin, and leaflet for proper graphing and plotting. Once this was done, we went to another source called Carto to map out the points onto a map of Texas.  This website was able to accurately render the voting data into a graph for later use. 
 
On the other side of this, a dashboard was being made to store the created graphs into. 
This was done through Github. Following this, the dashboard was loaded onto a platform called Heroku, through this platform, the dashboard is able to go live for anyone to see it and to make informed choices through it. 

Finally at the end of this project we were able to gather that even though the political map shows Texas as a very red state, there are nearly an equal amount of Democratic and Republican voters. In addition to this, the urban sections of Texas tend to vote democratic and the rural sections tend to vote Republican.

Personal insights/learned: Throughout this project we have learned an ample amount of data relating to Texas voting statistics. For one, while the data is stored in mass excel forms, it is not very clean for the average reader to understand. It must be redone in order to show a clear and concise retelling of the data.

We created a custom map using maptile and geojson data available publically to ouline maps for Bexar county, Travis county and Austin county by Precinct. We also Added fullscreen function using leaflet pugin. We then used QGIS software to merge the geojson data with csv and created a new geojson to hold all data for the map After this, we used plotly to represtent bar chart and pie chart and used a chloropath leaflet method to show colors. Numbers were used as a varible to set color. And finally creating an html grid to hold all data in its own classes.</h5>
<br></br>


<h6>Data Sets:</h6>
<ul>
 <li>https://www.votetexas.gov/voting/where.html</li>
<li>https://texaspolitics.utexas.edu/archive/html/vce/features/0302_02/demographics.html</li>
<li>https://www.pewresearch.org/religion/religious-landscape-study/state/texas/party-affiliation/</li>
<li>https://www.sos.state.tx.us/elections/historical/index.shtml</li>
<li>https://www.politico.com/2020-election/results/texas/</li>
<li>https://results.texas-election.com/reports</li>
<li>https://www.ksat.com/vote-2020/2020/10/29/here-are-all-of-the-election-day-polling-sites-in-bexar-county-where-voters-can-choose-to-vote/</li>
  
</ul>


<h6>Libraries Referenced:</h6>
<ul>
<li>https://kinsta.com/blog/javascript-libraries/</li>
<li>https://cesium.com/platform/cesiumjs/</li>
<li>https://apexcharts.com/</li>
<li>https://www.storybench.org/how-to-build-an-interactive-county-level-map-like-the-new-york-times/</li>
<li>https://latinamericanscience.carto.com/me?utm_source=Footer_Link&utm_medium=referral&utm_campaign=Embed_v1&utm_content=latinamericanscience</li>
<li>https://gis-txdot.opendata.arcgis.com/datasets/9b2eb7d232584572ad53bad41c76b04d_0/explore?location=31.007051%2C-100.049428%2C6.43</li>
<li>https://qgis.org/en/site/</li>
<li>https://github.com/Leaflet/Leaflet.fullscreen</li>
<li>https://plotly.com/</li>
<li>https://github.com/Charlie-Henry/Travis_County_Turnout</li>
<li>https://www.washingtonexaminer.com/opinion/100-facts-about-the-2020-presidential-election</li>
</ul>


   
