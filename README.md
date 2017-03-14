# Technical task
## Description
When user opens `index.html` he should see call history grouped by day.

Call history should be a scrollable list with breakdown by day.
 + Above list there should be a search field. 
 + Search should be performed for all fields with debounce of *250ms*.

 + User should be able to collapse/expand content of every day by clicking header

**Every history item should contain:**
* call duration
* number
* direction (Inbound call/ Outbound call)
* name (optional)
* call back button

 + When there is no name *__'Unknown caller'__* should be displayed.  
 + When call was missed (duration = 0) *__'missed'__* should be displayed.
 + User should have indication on weather it was Inbound call or Outbound based on direction: outbound - 0; inbound - 1.  
 + Missed call should be indicated with red text color.

# Realization

HTML5, CSS3, angular, bootstrap 

## Notice

Please launch index.html through some server to grabbing mock.json