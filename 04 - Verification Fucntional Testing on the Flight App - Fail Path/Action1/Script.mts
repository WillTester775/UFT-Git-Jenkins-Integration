WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2113430640_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "64480c421d7da652365d" @@ hightlight id_;_1903243016_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1907434872_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("From City",dtGlobalSheet) @@ hightlight id_;_1903244408_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("To City",dtGlobalSheet) @@ hightlight id_;_1907262392_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2113438896_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("No of Ticket",dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1903248824_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1907714200_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("Passenger Name", dtGlobalSheet) @@ hightlight id_;_1947762240_;_script infofile_;_ZIP::ssf38.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Check CheckPoint("passengerName") @@ hightlight id_;_1903246904_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1942683912_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_591692_;_script infofile_;_ZIP::ssf35.xml_;_
