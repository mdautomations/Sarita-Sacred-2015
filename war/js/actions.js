		var c = 0;
		var t;
		var timer_is_on = 0;
		var check ;
		var updatedwellid ;
		var sortArray = [];
		function timedCount() {
			
		    $('#txt').html(c) ;
		    c = c + 1;
		    t = setTimeout(function(){timedCount()}, 1000);
		}
		function startCount() 
		{
			console.log("came to do nothign called :: "+c);
		    if (!timer_is_on) {
		        timer_is_on = 1;
		        timedCount();
		        check = 1;
		    }
		}
		function stopCount()
		{
			console.log("came to do stop called :: "+c);
		    clearTimeout(t);
		    timer_is_on 		= 			0;
		    check 				= 			0;
		    c 						= 			0;
		    var 		dwelltime 			= 			$('#txt').html();
		    dwelltime 						= 			parseInt(dwelltime);
		    var 		bouncerate ;
			var 		userlogin 			= 			getRegistrationUrlCookie();
		    if(dwelltime<30)
		    {
		    			bouncerate 		= 		0;
		    }
		    else
		    {
		    			bouncerate 		= 		1;
		    }
		    $.ajax({
		         type: 'POST',
		         url: '/updatedwell', 
		         data	: {updatedwellid:updatedwellid,dwelltime:dwelltime,bouncerate:bouncerate,userlogin:userlogin},
		         async : false,
		         success: function(data)
	   			 {
		        	 console.log("updated dwll time :: "+dwelltime +"updatedwellid :: "+updatedwellid +"bouncerate :: "+bouncerate);
	   			 }
			 });
		}
		$(window).focus(function() {
			if(check!=0)
			{
				console.log("came to do nothign");
				stopCount();
			}
		});
		
$('#goo').click(function()
{
	 var searchquery = $('#searchtext').val();
	var htmls = '<div class="col-lg-12" id="1">'+
    '<section class="panel">'+
       '<div class="panel-body"><a href="http://en.wikipedia.org/wiki/Computer" target="_blank"style="color: blue;">1. Computer - Wikipedia, the free encyclopedia</a><br/>'+
    '<img src="computer/1.jpeg">'+
    '&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/<b><i>Computer</i></b> <br/> '+
       '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer is a general purpose device that can be programmed to carry out a set of arithmetic or logical operations automatically. Since a sequence of ... </div>'+
       '<a href="#" style="color: blue;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charles Babbage - ‎Computer science - ‎History of computing hardware - ‎Desktop</a>'+
    '</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="2">'+
'<section class="panel">'+
   '<div class="panel-body"><a href="http://www.bestbuy.com/site/electronics/computers-pcs/abcat0500000.c?id=abcat0500000" target="_blank" style="color: blue;">2.	Computers: Laptop, Desktop & Computer Hardware - Best Buy</a><br/>'+
'<img src="computer/2.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.bestbuy.com/site/electronics/<b><i>computers-pcs</i></b>/abcat0500000.c?id..</b><br/> '+
   '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get a computer designed to meet your needs, including laptops, desktops, all-in-one computers, monitors, and computer hardware at Best Buy.</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="3">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.webopedia.com/TERM/C/computer.html" target="_blank" style="color: blue;">3.	What is Computer? Webopedia</a><br/>'+
'<img src="computer/3.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i> www.webopedia.com<a href="#" style="color:blue;"> › TERM › C</a></i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer means a programmable machine. Computers respond to a specific set of instructions in a well-defined manner and execute prerecorded instructions</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="4">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www-cs.stanford.edu/" style="color: blue;" target="_blank">4.	Stanford Computer Science</a><br/>'+
'<img src="computer/4.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;www-cs.stanford.edu/</i> <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About The Red Sea Robotics Research Exploratorium was created in April 2012 through a generous research award from the King Abdullah University of ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="5">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://en.wikipedia.org/wiki/Computer" style="color: blue;" target="_blank">5.	Computer Basics: Getting to Know Computers</a><br/>'+
'<img src="computer/5.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i> www.gcflearnfree.org <a href="#" style="color:blue;"> › All Topics › Computer Basics</a></i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You can use a computer to type ... </div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="6">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.gcflearnfree.org/computerbasics/1" style="color: blue;" target="_blank">6.	Computer History Museum</a><br/>'+
'<img src="computer/6.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.computerhistory.org/ <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design_Code_Build II Broadcom Presents Design_Code_Build is a daylong education program put on by the Computer History Museum. Each event is filled ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="7">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.computer.org/" style="color: blue;" target="_blank">7.	IEEE Computer Society - Premier Organization of Computer ...</a><br/>'+
'<img src="computer/7.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.computer.org/ <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The IEEE Computer Society is the world premier organization of computing professionals, with rich offerings in publications, standards, certifications, ... </div>'+
'</section>'+
'</div>';
//=============================
var uses = '<div class="col-lg-12" id="9">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.byte-notes.com/uses-computers-various-fields" style="color: blue;" target="_blank">1. Uses of computers in various fields | Essay on uses of ...</a><br/>'+
'<img src="usee/1.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.byte-notes.com/uses-<b><i>computers</i></b>various-fields</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computers are used in so many fields in our daily life. From Engineers to Doctors, Students, Teachers, Government Organization they all use computers to ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="10">'+
'<section class="panel">'+
'<div class="panel-body"><a href="https://answers.yahoo.com/question/index?qid=20111115032010AAMzm2f" style="color: blue;" target="_blank">2.	What are the uses of the computer? - Yahoo Answers</a><br/>'+
'<img src="uses/2.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>https://answers.yahoo.com/question/index?qid...</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nov 15, 2011 - There are several uses of computers: - • Word Processing - Word Processing software automatically corrects spelling and grammar mistakes.</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="11">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.webopedia.com/TERM/C/computer.html" style="color: blue;" target="_blank">3.	Uses of Computer - Computer Notes</a><br/>'+
'<img src="uses/3.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i> ecomputernotes.com/fundamental/...to-computer/uses-of-computer</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uses of computer ,Education,Health and Medicine,Science,Business,Recreation and Entertainment,Government.</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="12">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://en.wikipedia.org/wiki/Computer" style="color: blue;" target="_blank">4.	Computer - Wikipedia, the free encyclopedia</a><br/>'+
'<img src="uses/4.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Computer</i> <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first use of the word “computer” was recorded in 1613 in a book called “The yong mans gleanings” by English writer Richard Braithwait I haue read the truest ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="13">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.buzzle.com/articles/uses-of-computer.html" style="color: blue;" target="_blank">5.	Uses of Computers - Buzzle</a><br/>'+
'<img src="uses/5.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.buzzle.com/articles/uses-of-computer.html</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dec 22, 2011 - While all of us living in the developed world may find the title of this article "naive" after decades of computer use, we should spare a thought for ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="14">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://ict123.wordpress.com/topics/introduction-to-a-computer/uses-of-computer/" style="color: blue;" target="_blank">6.	Uses of Computer: | Introduction to Basic Computer</a><br/>'+
'<img src="uses/6.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;ict123.wordpress.com/topics/introduction...computer/uses-of-computer/ <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer helps you to type a document. 2. A computer helps you to listen to music. 3. A computer helps you to use the internet. 4. A computer helps you to ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="15">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.123helpme.com/view.asp?id=26706" style="color: blue;" target="_blank">7.	The Many Uses of Computers :: Expository Essays</a><br/>'+
'<img src="uses/7.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.123helpme.com/view.asp?id=26706<br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Many Uses of Computers Computers are helpful because they offer a wide range of functions and services that are not available anywhere else. There are ...</div>'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="16">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.123helpme.com/view.asp?id=26706" style="color: blue;" target="_blank">8.	Computer Basics: Getting to Know Computers</a><br/>'+
'<img src="uses/8.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.gcflearnfree.org › All Topics › Computer Basics</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You can use a computer to type ...</div>'+
'</section>'+
'</div>';	      

//=============================
var history = '<div class="col-lg-12" id="17">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://en.wikipedia.org/wiki/History_of_computer_science" style="color: blue;" target="_blank">1.	History of computer science - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>en.wikipedia.org/wiki/History_of_computer_science</i><br/> '+
'<img src="history/8.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The history of computer science began long before the modern discipline of computer science that emerged in the 20th century, and hinted at in the centuries ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="18">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://en.wikipedia.org/wiki/Computer" style="color: blue;" target="_blank">2.	Computer - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>en.wikipedia.org/wiki/Computer</i><br/> '+
'<img src="history/1.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jump to History of computing hardware - First generation (mechanical/electromechanical), Calculators, Pascals calculator, Arithmometer, Difference ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="19">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://people.bu.edu/baws/brief computer history.html" style="color: blue;" target="_blank">3.	Brief History Of Computer - people</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i> people.bu.edu/baws/brief%20computer%20history.html</i><br/> '+
'<img src="history/2.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A BRIEF COMPUTER HISTORY. The computer as we know it today had its beginning with a 19th century English mathematics professor name Charles ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="20">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://homepage.cs.uri.edu/faculty/wolfe/book/Readings/Reading03.htm" style="color: blue;" target="_blank">4.	History of Computers</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;homepage.cs.uri.edu/faculty/wolfe/book/Readings/Reading03.htm</i> <br/> '+
'<img src="history/3.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This chapter is a brief summary of the history of Computers. It is supplemented by the two PBS documentaries video tapes "Inventing the Future" And "The ...</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="21">'+
'<section class="panel">'+
'<div class="panel-body"><a href="https://www.msu.edu/course/lbs/126/lectures/history.html" style="color: blue;" target="_blank">5.	History of Computers - Long, Long Ago</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>https://www.msu.edu/course/lbs/126/lectures/history.html</i><br/>'+
'<img src="history/4.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;History of Computers: 3000 BC to Present History of Computers - Long, Long Ago The Abacus. beads on rods to count and calculate; still widely used in Asia!.</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="22">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://inventors.about.com/library/blcoindex.htm" style="color: blue;" target="_blank">6.	The History of Computers - Computer History Timeline</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;inventors.about.com/library/blcoindex.htm<br/> '+
'<img src="history/5.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A history of computers and the inventors involved with each computer invention milestone - a timeline with detailed history features.</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="23">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.computersciencelab.com/ComputerHistory/History.htm" style="color: blue;" target="_blank">7.	Computer History - The Computer Science Lab</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.computersciencelab.com/ComputerHistory/History.htm<br/> '+
'<img src="history/6.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An illustrated history of computers with over 50 rare photos.</div>'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="24">'+
'<section class="panel">'+
'<div class="panel-body"><a href="http://www.computerhistory.org/timeline/?category=cmptr" style="color: blue;" target="_blank">8.	Timeline of Computer History : Computers Entries</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>www.computerhistory.org/timeline/?category=cmptr</i><br/> '+
'<img src="history/7.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hewlett-Packard is Founded. David Packard and Bill Hewlett found Hewlett-Packard in a Palo Alto, California garage. Their first product was the HP 200A Audio ...</div>'+
'</section>'+
'</div>';	
//=============================
var types = '<div class="col-lg-12" id="25">'+
'<section class="panel">'+
   '<div class="panel-body">'+
'<a href="http://www.byte-notes.com/four-types-computers" target="_blank"style="color: blue;">'+
	'1. Types of computer </a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<b><i>Computer</i></b> <br/> '+
 '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ 
'www.byte-notes.com/four-types-computers'+
'Since the advent of the first computer different types and sizes of computers are offering different services. Computers can be as big as occupying a large ...'+
'</div>'+
'<img src="types/1.jpeg">'+
   '<a href="#" style="color: blue;">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'</a>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="26">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.tutorialspoint.com/computer_fundamentals/computer_types.htm" target="_blank" style="color: blue;">'+
'2.Computer Types - Tutorials Point</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.tutorialspoint.com/computer_fundamentals/computer_types.htm<b><i>'+
'computers-pcs</i></b>/abcat0500000.c?id..</b><br/> '+
'<img src="types/2.jpeg">'+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Computer Types - Learn computer fundamental concepts in simple and easy steps starting from Overview, Applications, Generations, Types, Components, CPU, ...'+
'</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="27">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Classes_of_computers " target="_blank" style="color: blue;">'+
'3.	 Classes of computers - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> en.wikipedia.org/wiki/Classes_of_computers<a href="#" style="color:blue;"> › TERM › C</a></i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer means a programmable machine.'+ 
'Microcomputers are the most common kind of computers in use as of 2014. The term “microcomputer” was introduced with the advent of systems based on ...</div>'+
'<img src="types/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="28">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.gcflearnfree.org/computerbasics/1.2" style="color: blue;" target="_blank">'+
'4.	Computer Basics: Getting to Know Computers</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.gcflearnfree.org › All Topics › Computer Basics</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'<img src="types/4.jpeg">'+
'What are the different types of computers? When most people hear the word "computer," they think of a personal computer such as a desktop or laptop computer.'+
'</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="29">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://typeslist.com/different-types-of-computers/" style="color: blue;" target="_blank">'+
'5.	The Different Types of Computers | Types List</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> typeslist.com/different-types-of-computers/ <a href="#" style="color:blue;"> › All Topics › Computer Basics</a></i><br/>'+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer is one of the greatest inventions of man and it has seen many changes in functions, memory space, size and portability. What makes the computer ...'+
'</div>'+
'<img src="types/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="30">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://computer.howstuffworks.com/10-types-of-computers.htm" style="color: blue;" target="_blank">'+
'6.	10 Types of Computers - HowStuffWorks</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;computer.howstuffworks.com/10-types-of-computers.htm <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Do you know the different types of computers? Take a look at our list of 10 types of computers and learn about laptops, wearable PCs and more.'+
'</div>'+
'<img src="types/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="31">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.igcseict.info/theory/1/types/" style="color: blue;" target="_blank">'+
'7.	IGCSE ICT - Types of Computer</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.igcseict.info › ... › Types of Computer <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'You are all familiar desktop PCs and laptops, but did you know that computers can be as small as your mobile phone (in fact your phone is a computer!) and as ...'+
'<img src="types/6.jpeg">'+
'</div>'+
'</section>'+
'</div>';
//=============================

var technology = '<div class="col-lg-12" id="32">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://phys.org/technology-news/computer-sciences/" style="color: blue;" target="_blank">'+
'1. Computer Science News | Technology News ... - Phys.org</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.rdmag.com/topics/information-tech/computer-technology<b><i>computers</i></b>various-fields</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantum technology devices, such as high-precision sensors and specialised superfast computers, often depend on harnessing the delicate interaction of ...'+
'</div>'+
'<img src="technology/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="33">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.rdmag.com/topics/information-tech/computer-technology" style="color: blue;" target="_blank">'+
'2.	Topics | Computer Technology - R&D Magazine </a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.rdmag.com/topics/information-tech/computer-technology</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantum technology devices, such as high-precision sensors and specialised superfast computers, often depend on harnessing the delicate interaction of ...'+
'</div>'+
'<img src="technology/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="34">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://timesofindia.indiatimes.com/tech/computing" style="color: blue;" target="_blank">'+
'3.	Computer Technology News, Latest Computer Technology ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> ecomputernotes.com/fundamental/...to-computer/technology news </i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'timesofindia.indiatimes.com › Tech'+
'Computer Technology News. Latest Computer technology news and highlights. Stay at Times of India for the latest computer technology news and reviews.'+
'</div>'+
'<img src="technology/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="35">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.ctpl.co.in/" style="color: blue;" target="_blank">'+
'4.	Computer Technologies Pvt. Ltd.</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.ctpl.co.in/</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Computer Technologies Pvt. Ltd. is a provider of broad range of best of the breed Internet and Network Security Software & Appliance Solutions. Incepted to ...'+
'</div>'+
'<img src="technology/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="36">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://ict123.wordpress.com/topics/introduction-to-a-computer/uses-of-computer/" style="color: blue;" target="_blank">'+
'5.	Uses of Computers - Buzzle</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.buzzle.com/articles/uses-of-computer.html</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Dec 22, 2011 - While all of us living in the developed world may find the title of this article "naive" after decades of computer use, we should spare a thought for ...'+
'</div>'+
'<img src="technology/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="37">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Computer_technology_for_developing_areas" style="color: blue;" target="_blank">'+
'6.	Computer technology for developing areas - Wikipedia, the ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Computer_technology_for_developing_areas <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer technology for developing areas is often through the donation of technology to developing areas without thought for access to electricity or equipment ...'+
'‎Opportunity - ‎Sources of hardware - ‎Problems encountered - ‎See also'+
'</div>'+
'<img src="technology/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="38">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Computer_Technology_Limited" style="color: blue;" target="_blank">'+
'7.	Computer Technology Limited - Wikipedia, the free ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Computer_Technology_Limited<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Computer Technology Limited or CTL, was a British computer company founded slightly later than Digital Equipment Corporation (DEC) in the United States.</div>'+
'<img src="technology/7.jpeg">'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="39">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/History_of_computer_science" style="color: blue;" target="_blank">'+
'8.	Computer Basics: Getting to Know Computers</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.gcflearnfree.org › All Topics › Computer Basics</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A computer is an electronic device that manipulates information, or data.'+ 
'It has the ability to store, retrieve, and process data.'+ 
'You can use a computer to type ...</div>'+
'<img src="technology/8.jpeg">'+
'</section>'+
'</div>';	     
'<a href="http://en.wikipedia.org/wiki/Central_processing_unit" style="color: blue;" target="_blank">';


//=============================

var cpu = '<div class="col-lg-12" id="40">'+
'<section class="panel">'+
'<div class="panel-body">'+
'1.	Central processing unit - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>en.wikipedia.org/wiki/Central_processing_unit</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A central processing unit (CPU) is the hardware within a computer that carries out the instructions of a computer program by performing the basic arithmetical, ...'+
'‎Multi-core processor - ‎List of CPU architectures - ‎Control unit - ‎Processor'+
'</div>'+
'<img src="cpu/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="41">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.webopedia.com/TERM/C/CPU.html" style="color: blue;" target="_blank">'+
'2.	What is Central Processing Unit (CPU)? Webopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.webopedia.com/TERM/C/CPU.html</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'CPU is the abbreviation for central processing unit (meaning the processor). The CPU is the brains of the computer where most calculations take place.'+
'</div>'+
'<img src="cpu/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="42">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.newegg.com/CPUs-Processors/Category/ID-34" style="color: blue;" target="_blank">'+
'3.	CPU Processors - Newegg.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i> www.newegg.com › Computer Hardware'+
'</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A BRIEF COMPUTER HISTORY. '+
'Buy the newest CPUs and Processors from Intel, AMD at Newegg.com. We offer the best prices, fast shipping and top-rated customer service. Once you know ...'+
'</div>'+
'<img src="cpu/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="43">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.computerhope.com/jargon/c/cpu.htm" style="color: blue;" target="_blank">'+
'4.	What is CPU (Central Processing Unit)? - Computer Hope</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.computerhope.com/jargon/c/cpu.htm</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This chapter is a brief summary of the history of Computers.'+
'Computer dictionary definition for what CPU (Central Processing Unit) means including related links, information, and terms.'+
'</div>'+
'<img src="cpu/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="44">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.ebay.com/sch/CPUs-Processors-/164/i.html" style="color: blue;" target="_blank">'+
'5.	Computer CPUs and Processors | eBay</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.ebay.com/sch/CPUs-Processors-/164/i.html</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Visit eBay for great deals in Computer CPUs and Processors. Shop eBay!'+
'</div>'+
'<img src="cpu/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="22">'+
'<section class="panel">'+
'<div class="panel-body"></div>';



//=============================

var mouse = '<div class="col-lg-12" id="45">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Mouse_%28computing%29" style="color: blue;" target="_blank">'+
'1.	Mouse (computing) - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Mouse_(computing)<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'In computing, a mouse is a pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a ...'+
'‎Optical mouse - ‎Douglas Engelbart - ‎Trackball - ‎Apple Mouse'+
'</div>'+
'<img src="mouse/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="46">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Mouse" style="color: blue;" target="_blank">'+
'2.	Mouse - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Mouse<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A mouse (plural: mice) is a small mammal belonging to the order of rodents, characteristically having a pointed snout, small rounded ears, a body-length scaly ...'+
'</div>'+
'<img src="mouse/2.jpeg">'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="47">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.webopedia.com/TERM/M/mouse.html" style="color: blue;" target="_blank">'+
'3.	What is Mouse? Webopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.webopedia.com › TERM › M</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A device that controls the movement of the cursor or pointer on a display screen. A mouse is a small object you can roll along a hard, flat surface.</div>'+
'<img src="mouse/3.jpeg">'+
'</section>'+
'</div>'+
'<a href="http://www.snapdeal.com/products/computers-mouse" style="color: blue;" target="_blank">'+
'4.	Mouse - Snapdeal.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.snapdeal.com › Computers & Peripherals</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Rs. 125.00 to Rs. 7,490.00'+
'Buy Computer Mouse online at discounted prices on Snapdeal India. Shop online for PS/2, Wireless or USB Mouse for desktop & laptops.'+
'</div>'+
'<img src="mouse/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="48">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="https://www.apple.com/in/magicmouse/" style="color: blue;" target="_blank">'+
'5.	Apple (India) - Magic Mouse - The worlds first Multi-Touch ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> https://www.apple.com/in/magicmouse/ <a href="#" style="color:blue;"> › All Topics › Computer Basics</a></i><br/>'+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Magic Mouse is a Multi-Touch mouse that works wirelessly via Bluetooth. It lets you click anywhere, scroll in any direction, and perform gestures.'+
'</div>'+
'<img src="mouse/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="49">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.flipkart.com/laptop-accessories/mouse/pr?sid=6bo%2Cai3%2C2ay " style="color: blue;" target="_blank">'+
'6.	Mouse - Buy Mouse Online at Best Prices in India - Flipkart</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.flipkart.com › Computers › Laptop Accessories <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Mouse - Buy Mouse Online at Best Prices in India - Huge Collection of Branded Computers, Laptops, Computer & Network Components. Shop Online for ...'+
'</div>'+
'<img src="mouse/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="50">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.fotosearch.com/photos-images/computer.html" style="color: blue;" target="_blank">'+
'7.	MOUSE</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;mouse.org/ <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Non-profit group coordinating technology and learning in the New York City public schools. History, news, funding.'+
'</div>'+
'<img src="mouse/7.jpeg">'+
'</section>'+
'</div>';
//++++++++++++++++++++++++++++++++++
var picture = '<div class="col-lg-12" id="51">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="https://www.colourbox.com/browse/technology/computers/651" target="_blank"style="color: blue;">'+
'1. Computer Pictures | Stock Photos | Colourboxa</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<b><i>Computer</i></b> <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ 
'www.colourbox.com/browse/technology/computers/651'+
'Computers | ✓ More than 310000 Computers images ✓ High quality images for web & print - Stock photos of computers. Browse through the 150000 high q...'+
'</div>'+
'<a href="#" style="color: blue;">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'</a>'+
'<img src="picture/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="52">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://photobucket.com/images/computer?page=1" target="_blank" style="color: blue;">'+
'2.Computer Pictures, Images & Photos | Photobucket</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;http://photobucket.com/images/computer?page=1<b><i>'+
'computers-pcs</i></b>/abcat0500000.c?id..</b><br/> '+
   '<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'photobucket.com/images/computer'+
'View the 116434 best Computer Photos, Computer Images, Computer Pictures. Download photos or share to Facebook, Twitter, Tumblr, Blogger.'+
'</div>'+
'<img src="picture/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="53">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.freedigitalphotos.net/images/Computers_g62.html/ " target="_blank" style="color: blue;">'+
'3.	 Computers Pictures - Free Images of Computers - Royalty ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> http://www.freedigitalphotos.net/images/Computers_g62.html<a href="#" style="color:blue;"> › TERM › C</a></i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer means a programmable machine.'+ 
'Computers respond to a specific set of instructions in a well-defined manner and execute prerecorded instructions</div>'+
'<img src="picture/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="54">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www-cs.stanford.edu/" style="color: blue;" target="_blank">'+
'4.	Stanford Computer Science</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www-cs.stanford.edu/</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'About The Red Sea Robotics Research Exploratorium was created in April 2012 through a generous research award from the King Abdullah University of ...'+
'</div>'+
'<img src="picture/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="55">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://all-free-download.com/free-photos/computer-pictures.html " style="color: blue;" target="_blank">'+
'5.	Computer pictures Free Photos for free download (about ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> http://all-free-download.com/free-photos/computer-pictures.html <a href="#" style="color:blue;"> › All Topics › Computer Basics</a></i><br/>'+
'<br/>'+
'<img src="picture/5.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer is an electronic device that manipulates information, or data.'+
 'It has the ability to store, retrieve, and process data. all-free-download.com/free-photos/computer-pictures.html'+
'Free Photos about computer pictures (We have about 226 files). computer pictures Free Photos for free download. . computer pictures ,cartoon computer ...'+
'You can use a computer to type ...'+ 
'</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="56">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.fotosearch.com/photos-images/computer.html " style="color: blue;" target="_blank">'+
'6.	Computer Stock Photo Images. 864,833 computer royalty ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.fotosearch.com/photos-images/computer.html <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Download 864833 Computer images and stock photos. Fotosearch - The Worlds Stock Photography - One Web Site TM.'+
'</div>'+
'<img src="picture/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="57">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.123rf.com/stock-photo/computer.html " style="color: blue;" target="_blank">'+
'7.	Computer Stock Photos, Pictures, Royalty Free Computer ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.123rf.com/stock-photo/computer.html <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'<img src="picture/7.jpeg">'+
'Computer stock photos. Download royalty free computer images, computer cliparts, computer vectors and illustrations.'+
'</div>'+
'</section>'+
'</div>';

//=============================

var generation = '<div class="col-lg-12" id="58">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.webopedia.com/DidYouKnow/Hardware_Software/FiveGenerations.asp" style="color: blue;" target="_blank">'+
'1. The Five Generations of Computers Explained - Webopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.webopedia.com › Did You Know › Hardware & Software<b><i>computers</i></b>various-fields</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn about each of the five generations of computers and the technology developments that have led to the current devices that we use today.'+
'</div>'+
'<img src="generation/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="59">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.tutorialspoint.com/computer_fundamentals/computer_generations.htm" style="color: blue;" target="_blank">'+
'2.	Computer Generations - TutorialsPoint.com </a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.tutorialspoint.com/computer.../computer_generations.htm</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Generation in computer terminology is a change in technology a computer is/was being used. Initially, the generation term was used to distinguish between ...'+
'</div>'+
'<img src="generation/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="60">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.byte-notes.com/five-generations-computers" style="color: blue;" target="_blank">'+
'3.	Five Generations of Computers | Byte-Notes | Computer ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> www.byte-notes.com/five-generations-computers </i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'timesofindia.indiatimes.com › Tech'+
'Computer Technology News. Latest Computer technology news and highlights. Stay at Times of India for the latest computer technology news and reviews.'+
'</div>'+
'<img src="generation/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="61">'+
'<section class="panel">'+
'<div class="panel-body">Development of electronic computers can be divided into five generations depending upon the technologies used.Following are the five generations of ...'+
'<a href="http://www.lsp4you.com/electronics/Generation%20of%20Computers.pdf" style="color: blue;" target="_blank">'+
'4.	Generation of Computers (PDF) - lsp4you.com</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.lsp4you.com/electronics/Generation%20of%20Computers.pdf</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'The first electronic computer was designed and built at the University of Pennsylvania ... Generations of computers has been divided into five according to the ...'+
'</div>'+
'<img src="generation/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="62">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.slideshare.net/sowj8o8/generation-of-computers-25845330" style="color: blue;" target="_blank">'+
'5.	GENERATION OF COMPUTERS. - SlideShare</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>GENERATION OF COMPUTERS. - SlideShare</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Sep 3, 2013 - Success message. Fail message. Check your bulk/spam folders if you cant find our mail. Loading Loading… GENERATION OF COMPUTERS.'+
'</div>'+
'<img src="generation/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="63">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Fifth_generation_computer" style="color: blue;" target="_blank">'+
'6.	Fifth generation computer - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Fifth_generation_computer <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Fifth Generation Computer Systems project (FGCS) was an initiative by Japans Ministry of International Trade and Industry, begun in 1982, to create a ...'+
'</div>'+
'<img src="generation/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="64">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.btob.co.nz/article/five-generations-computers" style="color: blue;" target="_blank">'+
'7.	The five generations of computers | btob</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.btob.co.nz/article/five-generations-computers<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Computers are such an integral part of our everyday life now most people take them and what they have added to life totally for granted. Even more so the ...</div>'+
'<img src="generation/7.jpeg">'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="65">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.columbia.edu/cu/computinghistory/generations.html" style="color: blue;" target="_blank">'+
'8.	Computer Generations</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.columbia.edu/cu/computinghistory/generations.html</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'<img src="generation/8.jpeg">'+
'The the late 1960s and early 70s, there was much talk about "generations" of computer technology. This photo illustrates what were commonly known as the ...</div>'+
'</section>'+
'</div>';	      

//=============================

var laptop = '<div class="col-lg-12" id="66">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.snapdeal.com/products/computers-laptops" style="color: blue;" target="_blank">'+
'1.	Laptops - Snapdeal.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.snapdeal.com/products/computers-laptops</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Laptops online - Buy latest laptops in India @ best prices. Get upto 1500 Off* on laptops with best prices in India, reviews & compare online. 100% secured, All ...'+
'</div>'+
'<img src="laptop/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="67">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.flipkart.com/computers/laptops" style="color: blue;" target="_blank">'+
'2.	Laptops Store Online - Buy Laptops Products Online at Best ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.flipkart.com/computers/laptops</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Laptops Online Store in India.Free Shipping,Cash on delivery at Indias favourite Online Shop Flipkart.com.'+
'</div>'+
'<img src="laptop/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="68">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.amazon.in/Laptops/b?ie=UTF8&node=1375424031" style="color: blue;" target="_blank">'+
'3.	Laptops - Amazon.in</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i> www.amazon.in/Laptops/b?ie=UTF8&node=1375424031'+
'</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Results 1 - 24 of 2587 - Amazon.in: Buy Laptops from popular brands - HP, Dell, Lenovo, Acer, Sony and more for best prices at Amazon.in. Browse Windows, Mac ...'+
'</div>'+
'<img src="laptop/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="69">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.dell.com/in/p/laptops" style="color: blue;" target="_blank">'+
'4.	Dell Laptops and Ultrabook™ - Compare Latest Models ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.dell.com/in/p/laptops</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy the Latest model of Laptops & ultrabook online by visiting Dell official website. Compare & Shop Dell Inspiron, Alienware laptops and Ultrabook at dell.co.in.'+
'</div>'+
'<img src="laptop/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="70">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.lenovo.com/in/en/" style="color: blue;" target="_blank">'+
'5.	Buy Laptops, Netbooks, Tablets, Desktop PCs and More ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.lenovo.com/in/en/</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Visit Lenovos IN site and buy online the best laptops, notebooks, ultrabooks, desktops and servers for your home and business. Computer accessories and ...'+
'</div>'+
'<img src="laptop/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="71">'+
'<section class="panel">'+
'<div class="panel-body">';
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var monitor = '<div class="col-lg-12" id="72">'+
'<section class="panel">'+
   '<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Computer_monitor" target="_blank"style="color: blue;">'+
'1. Computer monitor - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Computer_monitor<b><i>Computer</i></b> <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A monitor or a display is an electronic visual display for computers. The monitor comprises the display device, circuitry and an enclosure. The display device in ...'+
'‎History - ‎Technologies - ‎Measurements of performance - ‎Additional features'+
'</div>'+
'<img src="monitor/1.jpeg">'+
'<a href="#" style="color: blue;">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'History - ‎Technologies - ‎Measurements of performance - ‎Additional features</a>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="73">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.bestbuy.com/site/computers-pcs/computer-monitors/abcat0509000.c?id=abcat0509000&ref=&loc=" target="_blank" style="color: blue;">'+
'2.Computer Monitors: LCD, LED Monitors - Best Buy</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.bestbuy.com/site/computers-pcs/...monitors/abcat0509000.c?id...<b><i>'+
'computers-pcs</i></b>/abcat0500000.c?id..</b><br/> '+
'<br/>'+
'<img src="monitor/2.png">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Find the computer monitor thats right for you at Best Buy. Compare and purchase monitors from 17-inch to 27-inch and up. Shop all of our LCD HD and LED HD ...'+
'</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="74">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.amazon.com/Monitors-Computers-Accessories/b?ie=UTF8&node=1292115011" target="_blank" style="color: blue;">'+
'3.	Amazon.com: Monitors - Computers & Accessories ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> www.amazon.com › Electronics › Computers & Accessories<a href="#" style="color:blue;"> › TERM › C</a></i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Results 1 - 24 of 63851 - Online shopping for Monitors - Computers & Accessories from a great selection at Electronics Store.</div>'+
'<img src="monitor/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="75">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www2.deloitte.com/us/en/pages/strategy/solutions/monitor-deloitte-strategy-consulting.html" style="color: blue;" target="_blank">'+
'4.Monitor Deloitte - U.S. Consulting Practice</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.monitor.com/</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A strategy consulting firm that focuses on the top management issues most critical to long-term competitiveness.'+
'</div>'+
'<img src="monitor/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="76">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.newegg.com/Monitors/Category/ID-19" style="color: blue;" target="_blank">'+
'5.	Monitors | Computer Monitors - Newegg.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> www.newegg.com › Computer Hardware <a href="#" style="color:blue;"> › All Topics › Computer Monitor</a></i><br/>'+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specifications you need to look at will depend on what you are going to be doing with your monitor. Are you going to be performing professional graphic ...'+
'</div>'+
'<img src="monitor/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="77">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.futureshop.ca/en-CA/category/monitors/1006.aspx"color: blue;" target="_blank">'+
'6.	Monitor - Future Shop</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.futureshop.ca/en-CA/category/monitors/1006.aspx <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Upgrade your computer with a super-sharp monitor featuring deep blacks and rich colours. Shop the latest LED and LCD monitors at FutureShop.ca to find ...</div>'+
'<img src="monitor/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="78">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.themonitor.com/" style="color: blue;" target="_blank">'+
'7.	The Monitor</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.themonitor.com/ <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'The Largest and leading Newspaper in South Texas, McAllen, Mission, Edinburg, Mexico - Rio Grande Valley.'+
'</div>'+
'<img src="monitor/7.jpeg">'+
'</section>'+
'</div>';
//=============================

var input = '<div class="col-lg-12" id="79">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Input/output" style="color: blue;" target="_blank">'+
'1. Input/output - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>en.wikipedia.org/wiki/Input/output<b><i>computers</i></b>various-fields</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For instance, a keyboard or mouse is an input device for a computer, while monitors and printers are output devices. Devices for communication between ...'+
'‎I/O (disambiguation) - ‎C file input/output - ‎Input–output model - ‎Category:Input/output'+
'</div>'+
'<img src="input/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="80">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.britannica.com/EBchecked/topic/288883/inputoutput-device" style="color: blue;" target="_blank">'+
'2.	input/output device (computer technology) -- Encyclopedia ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.britannica.com/EBchecked/topic/288883/inputoutput-device</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input/output device, also known as computer peripheral, any of various devices (including sensors) used to enter information and instructions into a computer for ...'+
'</div>'+
'<img src="input/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="81">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.unm.edu/~tbeach/terms/inputoutput.html" style="color: blue;" target="_blank">'+
'3.	Computer Terminology - Input and Output Devices</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> www.unm.edu/~tbeach/terms/inputoutput.html</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Sep 7, 2010 - This output could be a display on the computer screen, hardcopy on ... the variety of peripheral devices used for computer input and output.'+
'‎Input Devices - ‎Keyboard - ‎Mouse - ‎Touch pad'+
'</div>'+
'<img src="input/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="82">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://allaboutbasic.com/2010/12/14/277/" style="color: blue;" target="_blank">'+
'4.	List of Input Devices, Output Devices and Both Input Output ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;allaboutbasic.com/2010/12/14/277/</i> <br/> '+
'<br/>'+
'<img src="input/4.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Dec 14, 2010 - Job Recruitment Questions on Basic Computer Technology and Internet Part-1. ... Speaker act Output Device and Microphone act as Input.'+
'</div>'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="83">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://dce.kar.nic.in/new%20files/Chapter4-9-07.pdf" style="color: blue;" target="_blank">'+
'5.	Chapter 9 Input/Output Devices</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>dce.kar.nic.in/new%20files/Chapter4-9-07.pdf</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Input/Output devices are required for users to communicate with the computer. In simple terms, input devices bring information INTO the computer and output.'+
'</div>'+
'<img src="input/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="84">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.computerhope.com/issues/ch001355.htm" style="color: blue;" target="_blank">'+
'6.	What is the difference between an input and output device?</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.computerhope.com/issues/ch001355.htm<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information about the difference between a computer input and output device.'+
'</div>'+
'<img src="input/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="85">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.computerhope.com/jargon/o/outputde.htm" style="color: blue;" target="_blank">'+
'7.	Output device - Computer Hope</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.computerhope.com/jargon/o/outputde.htm<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Computer dictionary definition for what output device means including related links, examples, ... What is the difference between an input and output device?</div>'+
'<img src="input/7.jpeg">'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="86">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikibooks.org/wiki/A-level_Computing/AQA/Computer_Components,_The_Stored_Program_Concept_and_the_Internet/Hardware_Devices/Input_and_output_devices.htm" style="color: blue;" target="_blank">'+
'8.	Hardware Devices: Input and output devices - Wikibooks ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>en.wikibooks.org/.../Computer...Devices/Input_and_output_devices</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'<img src="input/8.jpeg">'+
'You should already have met the internal components of the computer and the peripherals, that sit outside. We are now going to look at two different categories ...</div>'+
'</section>'+
'</div>';	      

//=============================

var shortcut = '<div class="col-lg-12" id="87">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://windows.microsoft.com/en-IN/windows7/20-pc-shortcuts"  style="color: blue;" target="_blank">'+
'1.20 essential PC shortcuts - Windows Help</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>windows.microsoft.com/en-IN/windows7/20-pc-shortcuts</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'You could go to the File menu and select the Print command, or you can press the Ctrl button and the letter P. Ctrl+P is just one example of a keyboard shortcut. Shortcuts combine two or more keys to do something special that neither key does alone. I prefer to use shortcuts whenever possible.'+
'</div>'+
'<img src="shortcut/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="88">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.computerhope.com/shortcut.htm" style="color: blue;" target="_blank">'+
'2.	Computer keyboard shortcut keys - Computer Hope</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.computerhope.com/shortcut.htm</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Listing all Computer shortcut keys for major applications.'+
'‎Top 10 keyboard shortcuts - ‎What are F1 through F12 keys - ‎Keyboard terms'+
'</div>'+
'<img src="shortcut/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="89">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.computerhope.com/shortcut/word.htm" style="color: blue;" target="_blank">'+
'3.	Microsoft Word shortcut keys - Computer Hope</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i> www.computerhope.com/shortcut/word.htm'+
'</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A BRIEF COMPUTER HISTORY.'+ 
'Below is a listing of all the major shortcut keys in Microsoft Word. See the computer shortcut page if you are looking for a list of shortcut keys used in other ...'+
'</div>'+
'<img src="shortcut/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="90">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.hongkiat.com/blog/100-keyboard-shortcuts-windows/" style="color: blue;" target="_blank">'+
'4.	100 Keyboard shortcuts (Windows) - Hongkiat.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.hongkiat.com/blog/100-keyboard-shortcuts-windows/</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This chapter is a brief summary of the history of Computers.'+
'Getting familiar with keyboard shortcuts not only help you get the work done faster, ... F4 key (Display the Address bar list in My Computer or Windows Explorer) ...'+
'</div>'+
'<img src="shortcut/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="91">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://support.microsoft.com/kb/126449" style="color: blue;" target="_blank">'+
'5.	Keyboard shortcuts for Windows - Microsoft Support</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>support.microsoft.com/kb/126449</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'This article lists keyboard shortcuts that you can use with Windows. Back to ... Windows Logo+L: Lock the computer (without using CTRL+ALT+DELETE) ... an object; CTRL+ESC: Opens the Start menu (use the ARROW keys to select an item) ...'+
'</div>'+
'<img src="shortcut/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="92">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://windows.microsoft.com/en-IN/windows7/20-pc-shortcuts" style="color: blue;" target="_blank">'+
'6.	20 essential PC shortcuts - Windows Help</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;windows.microsoft.com/en-IN/windows7/20-pc-shortcuts<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'You could go to the File menu and select the Print command, or you can press the Ctrl button and the letter P. Ctrl+P is just one example of a keyboard shortcut. Shortcuts combine two or more keys to do something special that neither key does alone. I prefer to use shortcuts whenever possible.'+
'</div>'+
'<img src="shortcut/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="93">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://productivity.ben61a.com/basics/common-shortcut-keys.php" style="color: blue;" target="_blank">'+
'7.	Common Shortcut Keys / Basics / Computer Productivity</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;productivity.ben61a.com/basics/common-shortcut-keys.php<br/> '+
'<br/>'+
'<img src="shortcut/7.jpeg">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'It"s hard to remember all the shortcut keys out there. But luckily, most programs adopt conventions (like Ctrl+S, which always saves what youre working on).'+
'</div>'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="94">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.bilbo.com/shortcut.html" style="color: blue;" target="_blank">'+
'8.	Keyboard shortcuts instead of mouse</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.computerhistory.org/timeline/?category=cmptr</i><br/> '+
'<img src="shortcut/8.jpeg">'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Hewlett-Packard is Founded. David Packard and Bill Hewlett found Hewlett-Packard in a Palo Alto, California garage.'+ 
'Their first product was the HP 200A Audio ...</div>'+
'</section>'+
'</div>';
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var personal = '<div class="col-lg-12" id="95">'+
'<section class="panel">'+
   '<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Personal_computer" target="_blank"style="color: blue;">'+
'1. Personal computer - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Personal_computer<b><i>Computer</i></b> <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A personal computer (PC) is a general-purpose computer, whose size, capabilities and original sale price makes it useful for individuals, and is intended to be ...'+
'‎Programma 101 - ‎Desktop - ‎Gaming computer - ‎PC game'+
'</div>'+
'<a href="#" style="color: blue;">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'History - ‎Technologies - ‎Measurements of performance - ‎Additional features</a>'+
'<img src="personal/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="96">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.webopedia.com/TERM/P/personal_computer.html" target="_blank" style="color: blue;">'+
'2.What is Personal Computer (PC)? A Webopedia Definition</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.webopedia.com › TERM › P<b><i>'+
'computers-pcs</i></b>/abcat0500000.c?id..</b><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A personal computer (PC) is a small, relatively inexpensive computer designed for an individual user. In price, personal computers range anywhere from a few ...'+
'</div>'+
'<img src="personal/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="97">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.webopedia.com/TERM/P/PC.html" target="_blank" style="color: blue;">'+
'3.	What is Personal Computer (PC)? Webopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> www.webopedia.com › TERM › P<a href="#" style="color:blue;"> › TERM › C</a></i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PC is short for personal computer. The first personal computer produced by IBM was called the PC, and increasingly the term PC came to mean IBM or ...</div>'+
'<img src="personal/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="98">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.snapdeal.com/products/computers-desktops" style="color: blue;" target="_blank">'+
'4.	Desktop Computer: Latest Desktop PC Price in India ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.snapdeal.com › Computers & Peripherals</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Free to Rs. 4,55,001.00'+
'Buy desktop computers at guaranteed lowest price in India. Top desktop PC brands - Apple, Compaq, Sony, Lenovo, Samsung, Acer with free shipping across ...'+
'</div>'+
'<img src="personal/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="99">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.britannica.com/EBchecked/topic/452928/personal-computer-PC" style="color: blue;" target="_blank">'+
'5.	personal computer (PC) -- Encyclopedia Britannica</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> http://www.britannica.com/EBchecked/topic/452928/personal-computer-PC<a href="#" style="color:blue;"> ›  personal computer</a></i><br/>'+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PC a digital computer designed for use by only one person at a time. A typical personal computer assemblage consists of a central processing unit (CPU), which ...'+
'</div>'+
'<img src="personal/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="100">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://whatis.techtarget.com/definition/personal-computer-PC"color: blue;" target="_blank">'+
'6.	What is personal computer (PC)? - Definition from WhatIs.com</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;whatis.techtarget.com › ... › Consumer Technology › Personal computing<br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'In its more general usage, a personal computer (PC) is a microcomputer designed for use by one person at a time. Prior to the PC, computers were designed for ...</div>'+
'<img src="personal/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="101">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.blinkenlights.com/pc.shtml" style="color: blue;" target="_blank">'+
'7.	Personal Computer Milestones</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.blinkenlights.com/pc.shtml<br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'No, the 1977 Apple ][ was the first highly successful mass-produced personal computer, but not the first personal computer. Nor was the 1976 Apple 1, which can ...'+
'</div>'+
'<img src="personal/7.jpeg">'+
'</section>'+
'</div>';
//=============================

var application = '<div class="col-lg-12" id="102">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.tutorialspoint.com/computer_fundamentals/computer_applications.htm" style="color: blue;" target="_blank">'+
'1. Computer Applications - Tutorials Point</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>http://www.tutorialspoint.com/computer_fundamentals/computer_applications.htm<b><i>computers</i></b>various-fields</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Applications - Learn computer fundamental concepts in simple and easy steps starting from Overview, Applications, Generations, Types, Components, ...'+
'</div>'+
'<img src="application/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="103">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://en.wikipedia.org/wiki/Application_software" style="color: blue;" target="_blank">'+
'2.	Application software - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>http://en.wikipedia.org/wiki/Application_software</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many application programs deal principally with documents. Applications may be bundled with the computer and its system software or published separately, ...'+
'</div>'+
'<img src="application/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="104">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.gcflearnfree.org/computerbasics/3" style="color: blue;" target="_blank">'+
'3.	Computer Basics: Understanding Applications</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> http://www.gcflearnfree.org/computerbasics/3</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Applications for desktop or laptop computers are sometimes called desktop applications, and those for mobile devices are called mobile apps. When you open ...'+
'</div>'+
'<img src="application/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="105">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.webopedia.com/TERM/A/application.html" style="color: blue;" target="_blank">'+
'4.	What is Application (Application Software)? Webopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;http://www.webopedia.com/TERM/A/application.html</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Dec 14, 2010 - Job Recruitment Questions on Basic Computer Technology and Internet Part-1. ... Speaker act Output Device and Microphone act as Input.'+
'</div>'+
'<img src="application/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="106">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.inderscience.com/jhome.php?jcode=ijcat" style="color: blue;" target="_blank">'+
'5.	International Journal of Computer Applications in Technology</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>http://www.inderscience.com/jhome.php?jcode=ijcat</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'IJCAT addresses issues of computer applications, information and communication systems, software engineering and management, CAD/CAM/CAE, numerical ...'+
'</div>'+
'<img src="application/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="107">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.wikihow.com/Learn-Computer-Applications" style="color: blue;" target="_blank">'+
'6.	How to Learn Computer Applications: 8 Steps (with Pictures)</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;http://www.wikihow.com/Learn-Computer-Applications<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How to Learn Computer Applications. A guide to learning computer applications. While each computer application is different, there are some similarities across ...'+
'</div>'+
'<img src="application/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="108">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.uiltexas.org/academics/computer-applications" style="color: blue;" target="_blank">'+
'7.	Computer Applications — University Interscholastic League ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;http://www.uiltexas.org/academics/computer-applications<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Computer Applications focuses on word processing speed and accuracy, skill in the use of database and spreadsheet applications, and the integration of all of ...</div>'+
'<img src="application/7.jpeg">'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="109">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.journals.elsevier.com/journal-of-network-and-computer-applications/" style="color: blue;" target="_blank">'+
'8.	Journal of Network and Computer Applications - Elsevier</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>http://www.journals.elsevier.com/journal-of-network-and-computer-applications/</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'The Journal of Network and Computer Applications welcomes research contributions, surveys and notes in all areas relating to computer networks and...</div>'+
'<img src="application/8.jpeg">'+
'</section>'+
'</div>';	      

//=============================

var dell = '<div class="col-lg-12" id="110">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.dell.co.in/"  style="color: blue;" target="_blank">'+
'1.Dell – Official Site for Home & Business IT Solutions | Dell ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>http://www.dell.co.in/</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Dell India provides IT solutions, services & support. Visit Dell.co.in for Ultrabook, Laptops, Desktops, Monitors, Servers, Storage, Printers & Computer ...'+
'</div>'+
'<img src="dell/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="111">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.dell.com/" style="color: blue;" target="_blank">'+
'2.	Dell Official Site - The Power To Do More | Dell</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>http://www.dell.com/</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Official Dell site covering the personal computers and technology related products they manufacture, support and sell.'+
'</div>'+
'<img src="dell/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="112">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.dell.com/in/p/laptops" style="color: blue;" target="_blank">'+
'3.	Dell Laptops and Ultrabook™ - Compare Latest Models ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i> www.dell.com/in/p/laptops'+
'</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A BRIEF COMPUTER HISTORY.'+ 
'Representations, benefits and other entitlements offered exclusively by www.amazon.in, will not be honored by Dell under any circumstances and Dell shall not ...'+
'</div>'+
'<img src="dell/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="113">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.dell.com/support/home/in/en/indhs1/Products/" style="color: blue;" target="_blank">'+
'4.	Support | Dell India</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.dell.com/support/home/in/en/indhs1/Products/</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get support for your Dell product with free diagnostic tests, drivers, downloads, how-to articles, videos, FAQs and community forums. Or speak with a Dell ...'+
'</div>'+
'<img src="dell/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="114">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.flipkart.com/q/dell-laptops" style="color: blue;" target="_blank">'+
'5.	Dell - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>http://www.flipkart.com/q/dell-laptops</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Dell Inc. is an American privately owned multinational computer technology company based in Round Rock, Texas, United States, that develops, sells, repairs ...'+
'</div>'+
'<img src="dell/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="115">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.flipkart.com/q/dell-laptops" style="color: blue;" target="_blank">'+
'6.	Dell Laptops - Buy Dell Laptops Online at Indias Best ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;windows.microsoft.com/en-IN/windows7/20-pc-shortcuts<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'You could go to the File menu and select the Print command, or you can press the Ctrl button and the letter P. Ctrl+P is just one example of a keyboard shortcut. Shortcuts combine two or more keys to do something special that neither key does alone. I prefer to use shortcuts whenever possible.'+
'</div>'+
'<img src="dell/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="116">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.snapdeal.com/brand/dell/computers-laptops" style="color: blue;" target="_blank">'+
'7.	Dell Laptops - Snapdeal.com</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;productivity.ben61a.com/basics/common-shortcut-keys.php<br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Rs. 20,903.00 to Rs. 1,88,955.00'+
'Buy Dell laptops online in India at lowest prices. Shop online Dell laptops on EMI & avail best laptop deals & offers at Snapdeal.com. Buy Dell Inspiron laptops, ...'+
'</div>'+
'<img src="dell/7.jpeg">'+
'</section>'+
'</div>'+ 
'<br/>'+
'<div class="col-lg-12" id="117">'+
'<section class="panel">'+
'<div class="panel-body">';
//===================================
var hcl = '<div class="col-lg-12" id="118">'+
'<section class="panel">'+
   '<div class="panel-body">'+
'<a href="www.hclstore.in/categories/HCL...and...Laptops.../cid-CU00009235.aspx" target="_blank"style="color: blue;">'+
'1. HCL Laptops - HCL Store</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.hclstore.in/categories/HCL...and...Laptops.../cid-CU00009235.aspx<b><i>Computer</i></b> <br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Looking for best deals on new laptops in India? Get best online shopping deals on laptop in India at HCL Store. For more information visit online or call ...'+
'‎HCL TB000009 - ‎HCL AE2V0150-I - ‎HCL AE2V0130-U'+
'</div>'+
'<a href="#" style="color: blue;">'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'History - ‎Technologies - ‎Measurements of performance - ‎Additional features</a>'+
'<img src="hcl/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="119">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.hclstore.in/" target="_blank" style="color: blue;">'+
'2.HCL Store: Buy Online HCL Laptops, Desktops & Tablets in ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.hclstore.in/<b><i>'+
'computers-pcs</i></b>/abcat0500000.c?id..</b><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Looking for online computer store in India? HCL Store is the best place to buy latest laptop, desktop & tablets at best prices. To know more visit us online or call ...'+
'‎HCL Laptops - ‎ME Tablets - ‎HCL Desktops - ‎Edutainment Products'+
'</div>'+
'<img src="hcl/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="120">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.snapdeal.com/brand/hcl/computers-laptops" target="_blank" style="color: blue;">'+
'3.	HCL Laptops - Snapdeal.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> http://www.snapdeal.com/brand/hcl/computers-laptops<a href="#" style="color:blue;"> › TERM › C</a></i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 15,325.00 to Rs. 36,490.00'+
'HCL Laptops - Buy HCL ME Laptops online in India @ best prices. Select from wide range of latest HCL Laptops at incredible discount prices at Snapdeal.com.'+
'</div>'+
'<img src="hcl/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="121">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.pricedekho.com " style="color: blue;" target="_blank">'+
'4.	HCL Laptops Price List - PriceDekho.com</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;www.pricedekho.com </i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'37 products - Lowest Prices for HCL Laptops in India. 37 HCL Laptops available starting at Rs.19620. Buy Laptops online, compare prices, read specifications, ...'+
'</div>'+
'<img src="hcl/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="122">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://compareindia.ibnlive.com/products/laptops/hcl/30/66" style="color: blue;" target="_blank">'+
'5.	HCL - Laptops - Compare India - IBNLive</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> http://compareindia.ibnlive.com/products/laptops/hcl/30/66<a href="#" style="color:blue;"> ›  personal computer</a></i><br/>'+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Results 1 - 10 of 275 - HCL Laptops - Starting at Rs. 18600/- . Get Online Price in India , Reviews, Features, Ratings, Specification, Deals and much more of HCL ...'+
'</div>'+
'<img src="hcl/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="123">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.mysmartprice.com/computer/.../hcl-laptop-price-list-in-india.html"color: blue;" target="_blank">'+
'6.	HCL Laptops Price - MySmartPrice</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.mysmartprice.com/computer/.../hcl-laptop-price-list-in-india.html<br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Prices mentioned above are the best (least) price available for each item across all stores. To get prices across all stores please select (click) a given Laptops.</div>'+
'<img src="hcl/6.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="124">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.nehruplacemarket.com/laptop-price/hcl-laptop-price.php" style="color: blue;" target="_blank">'+
'7.	HCL Laptop Price List - Nehru Place Computer Market</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;www.nehruplacemarket.com/laptop-price/hcl-laptop-price.php<br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'HCL Laptop price list tells about latest Laptop price list of HCL laptop in NehruPlace Market Delhi India for 2014 updated on daily bases for all brands.'+
'</div>'+
'<img src="hcl/7.jpeg">'+
'</section>'+
'</div>';
//=============================

var lenovo = '<div class="col-lg-12" id="125">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="en.wikipedia.org/wiki/Lenovo" style="color: blue;" target="_blank">'+
'1. Lenovo - Wikipedia, the free encyclopedia</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>http://www.tutorialspoint.com/computer_fundamentals/computer_applications.htm<b><i>computers</i></b></i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lenovo Group Ltd. (stylized as lenovo) is a Chinese multinational computer technology company with headquarters in Beijing, China, and Morrisville, North ...'+
'</div>'+
'<img src="lenevo/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="126">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.flipkart.com/q/lenovo-laptops" style="color: blue;" target="_blank">'+
'2.	Lenovo Laptops - Buy Lenovo Laptops Online at Indias Best ...</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;<i>www.flipkart.com/q/lenovo-laptops</i><br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lenovo Laptops - Buy Lenovo Laptops Online at Indias Best Online Shopping Store. Check Price in India and Buy Online. Also Read Latest Product Reviews ...'+
'</div>'+
'<img src="lenevo/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="127">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.gsmarena.com/lenovo-phones-73.php" style="color: blue;" target="_blank">'+
'3.	All Lenovo phones - GSM Arena</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i> www.gsmarena.com/lenovo-phones-73.php</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'A606 • Yoga Tablet 2 10.1 • Yoga Tablet 2 8.0 • Tab S8 • Vibe X2 • Vibe Z2 • A850+ • Vibe Z2 Pro • Golden Warrior A8 • Golden Warrior S8 • S939 • S750 • A889 ...'+
'</div>'+
'<img src="lenevo/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="128">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://gadgets.ndtv.com/mobiles/lenovo-phones" style="color: blue;" target="_blank">'+
'4	Lenovo Phones: All Latest Lenovo Mobile Phones</a><br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;http://gadgets.ndtv.com/mobiles/lenovo-phones</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'All Latest Lenovo Phones List. The Chinese multinational technology firm entered the smartphone business in 2012 and has created various Android devices ...'+
'</div>'+
'<img src="lenevo/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="129">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.inderscience.com/jhome.php?jcode=ijcat" style="color: blue;" target="_blank">';
      

//=============================

var acer = '<div class="col-lg-12" id="130">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.acer.co.in/"  style="color: blue;" target="_blank">'+
'1.Acer | explore beyond limits</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.acer.co.in/</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Find your laptop. Need help choosing your next laptop? Click here to see all laptops and use the filters to help narrow down your search. Discover More ...'+
'</div>'+
'<img src="acer/1.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="131">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.acer.com/" style="color: blue;" target="_blank">'+
'2.	Acer | explore beyond limits</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.acer.com/</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Acer ranks among the worlds top five branded PC vendors.'+
'</div>'+
'<img src="acer/2.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="132">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.flipkart.com/q/acer-laptops" style="color: blue;" target="_blank">'+
'3.	Acer Laptops - Buy Acer Laptops Online at Indias Best ...</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i> www.flipkart.com/q/acer-laptops'+
'</i><br/> '+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acer Laptops - Buy Acer Laptops Online at Indias Best Online Shopping Store. Check Price in India and Buy Online. Also Read Latest Product Reviews & More ...'+
'</div>'+
'<img src="acer/3.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="133">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="en.wikipedia.org/wiki/Acer_Inc." style="color: blue;" target="_blank">'+
'4.	Acer Inc. - Wikipedia, the free encyclopedia</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;en.wikipedia.org/wiki/Acer_Inc.</i> <br/> '+
'<br/>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acer Inc (stylized as acer, or formerly as acer) is a Taiwanese multinational hardware and electronics corporation headquartered in Xizhi, New Taipei City, ...'+
'</div>'+
'<img src="acer/4.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="134">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="www.gsmarena.com/acer-phones-59.php" style="color: blue;" target="_blank">'+
'5.	All Acer phones - GSM Arena</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;'+
'<i>www.gsmarena.com/acer-phones-59.php</i><br/>'+
'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
'Iconia B1-720 • Iconia A1-830 • Liquid Z5 • Liquid S2 • Liquid Z3 • Liquid S1 • Iconia Tab A3 • Iconia Tab A1-811 • Iconia Tab A1-810 • Liquid E2 • Liquid Z2 ...'+
'</div>'+
'<img src="acer/5.jpeg">'+
'</section>'+
'</div>'+
'<br/>'+
'<div class="col-lg-12" id="135">'+
'<section class="panel">'+
'<div class="panel-body">'+
'<a href="http://www.flipkart.com/q/dell-laptops" style="color: blue;" target="_blank">';


setTimeout(function() { resultshow(); }, 5000);
function resultshow()
{
	 var searchquery = $('#searchtext').val();
	 if (searchquery.indexOf('Computer') != -1 )
	 {
		 console.log("1");
		 sortlogic(htmls);
	 }
	 else if(searchquery.indexOf("uses")!= -1 )
	 {
			console.log("2");
			sortlogic(uses);
	 }
	 else if(searchquery.indexOf("history")!= -1 )
	 {
			console.log("3");
			sortlogic(history);
	 }
	 else if(searchquery.indexOf("types")!= -1 )
	 {
			console.log("4");
			sortlogic(types);
	 }
	 else if(searchquery.indexOf("technology")!= -1 )
	 {
			console.log("5");
			sortlogic();
	 }
	 else if(searchquery.indexOf("mouse")!= -1 )
	 {
			console.log("6");
			sortlogic(mouse);
	 }
	 else if(searchquery.indexOf("cpu")!= -1 )
	 {
			console.log("7");
			sortlogic(cpu);
	 }
	 else if(searchquery.indexOf("laptop")!= -1 )
	 {
			console.log("8");
			sortlogic(laptop);
	 }
	 else if(searchquery.indexOf("generation")!= -1 )
	 {
			console.log("9");
			sortlogic(generation);
	 }
	 else if(searchquery.indexOf("picture")!= -1 )
	 {
			console.log("10");
			sortlogic(picture);
	 }
	 else if(searchquery.indexOf("monitor")!= -1 )
	 {
			console.log("11");
			sortlogic(monitor);
	 }
	 else if(searchquery.indexOf("input")!= -1 )
	 {
			console.log("12");
			sortlogic(input);
	 }
	 else if(searchquery.indexOf("shortcut")!= -1 )
	 {
			console.log("13");
			sortlogic(shortcut);
	 }
	 else if(searchquery.indexOf("dell")!= -1 )
	 {
			console.log("14");
			sortlogic(dell);
	 }
	 else if(searchquery.indexOf("application")!= -1 )
	 {
			console.log("15");
			sortlogic(application);
	 }
	 else if(searchquery.indexOf("personal")!= -1 )
	 {
			console.log("16");
			sortlogic(personal);
	 }
	 else if(searchquery.indexOf("acer")!= -1 )
	 {
			console.log("17");
			sortlogic(acer);
	 }
	 else if(searchquery.indexOf("lenovo")!= -1 )
	 {
			console.log("18");
			sortlogic(lenovo);
	 }
	 else if(searchquery.indexOf("hcl")!= -1 )
	 {
			console.log("19");
			sortlogic(hcl);
	 }
	 else
	 {
		console.log("4");
		$('#filters').append("Sorry ! Currently No Results found for your query on our database");
		//$('#filters').append(uses);
		//$('#filters').append(history);
	 }
//	$('.col-lg-12').click(function()
//	{
//					startCount();
//					var id = $(this).attr('id');
//					updatedwellid = id;
//					var href =   $('#'+id).find('a').attr('href');
//					var user = getRegistrationUrlCookie();
//					var queries =$('#searchtext').val()
//					var url = href;
//					var date = new Date();
//					var clickthorugh = 1;
//					 $.ajax({
//				         type: 'POST',
//				         url: '/insertOrUpdateAccess', 
//				         data	: {id:id,user:user},
//				         async : false,
//				         success: function(data)
//			   			 {
//				        	    
//			   			 }
//					 });
//				      $.ajax({
//			    	         type: 'POST',
//			    	         url: '/storedetails', 
//			    	         data	: {id:id,user:user,queries:queries,url:url,date:date,clickthorugh:clickthorugh},
//			    	         async : false,
//			    	         success: function(data)
//			       			 {
//			    	        	 
//			       			 }
//			        	 });
//		});
}
});
function setRegistrationUrlCookie(cook)
{
	document.cookie="cookie" + "=" + cook;
}
function getRegistrationUrlCookie()
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	content= "cookie";
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==content)
	  {
		  return unescape(y);
	  }
	}
}
function sortlogic(getbuild)
{
	$('#filters').append(getbuild);
	var 		userlogin 			= 			getRegistrationUrlCookie();
	 $.ajax({
         type: 'POST',
         url: '/getsortedlist', 
         data	: {user:userlogin},
         async : false,
         success: function(data)
         {
        	 		jsonvar				=	JSON.parse(data);
        	 		var temparray = [];
        	 		console.log(jsonvar);
        	 		
        	 		for(index in jsonvar)
					{
						var idobtained = jsonvar[index].clickthorugh;
//						idobtained = idobtained.split('a')[0];
						temparray.push(idobtained);
					}
        	 		temparray.sort(function(a, b){return b-a});
        	 		for(var i=0; i<temparray.length;i++)
        	 		{
        	 			for(index in jsonvar)
    					{
        	 				if(jsonvar[index].clickthorugh == temparray[i])
        	 				{
        	 					var idobtained = jsonvar[index].id;
        						idobtained = idobtained.split('a')[0];
        	 					sortArray.push(idobtained);
        	 				}
    					}
        	 		}
        	 		$(".col-lg-12").each(function(){
        	 			sortArray.push(this.id);
        	 		});
					var newsortedlist = [];
					$.each(sortArray, function(i, el){
					    if($.inArray(el, newsortedlist) === -1) newsortedlist.push(el);
					});
					$.each(newsortedlist,function(index,value){
						   $('#filters').append($('#'+value));
					});
					$('#filters').show();
					$('#images').hide();
					$('.col-lg-12').click(function()
					{
											startCount();
											var id = $(this).attr('id');
											updatedwellid = id;
											var href =   $('#'+id).find('a').attr('href');
											var user = getRegistrationUrlCookie();
											var queries =$('#searchtext').val()
											var url = href;
											var date = new Date();
											var clickthorugh = 1;
											 $.ajax({
										         type: 'POST',
										         url: '/insertOrUpdateAccess', 
										         data	: {id:id,user:user},
										         async : false,
										         success: function(data)
									   			 {
										        	    
									   			 }
											 });
										      $.ajax({
									    	         type: 'POST',
									    	         url: '/storedetails', 
									    	         data	: {id:id,user:user,queries:queries,url:url,date:date,clickthorugh:clickthorugh},
									    	         async : false,
									    	         success: function(data)
									       			 {
									    	        	 
									       			 }
									        	 });
					});
		 }
	 });
	
}
