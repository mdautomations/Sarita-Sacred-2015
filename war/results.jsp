<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="ThemeBucket">
    <link rel="shortcut icon" href="images/favicon.png">
    <title>Search Engine</title>
    <link href="bs3/css/bootstrap.min.css" rel="stylesheet">
    <link href="js/jquery-ui/jquery-ui-1.10.1.custom.min.css" rel="stylesheet">
    <link href="css/bootstrap-reset.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="js/jvector-map/jquery-jvectormap-1.2.2.css" rel="stylesheet">
    <link href="css/clndr.css" rel="stylesheet">
    <link href="js/css3clock/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="js/morris-chart/morris.css">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet"/>
    
</head>
<body>
<section id="container">
<!--header start-->
<header class="header fixed-top clearfix">
<!--logo start-->
<div class="brand">

    <a href="index.jsp" class="logo" style="color: white; text-transform: none; font-size: 28px;">
				    Search
    </a>
    <div class="sidebar-toggle-box">
        <div class="fa fa-bars"></div>
    </div>
</div>
<!--logo end-->



</header>
<!--header end-->
<!--sidebar start-->
<aside>
    <div id="sidebar" class="nav-collapse">
        <!-- sidebar menu start-->
        <div class="leftside-navigation">
            <ul class="sidebar-menu" id="nav-accordion">
                <li>
                    <a class=" active" href="search.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>Search Engine</span>
                    </a>
                </li>
                 <li>
                    <a class=""  href="weblog.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>Web log file</span>
                    </a>
                </li>
<!--                  <li> -->
<!--                     <a class="active" data-toggle="modal" href="#myModal-1"> -->
<!--                         <i class="fa fa-dashboard"></i> -->
<!--                         <span>Web log file</span> -->
<!--                     </a> -->
<!--                 </li> -->
                <li>
                    <a class="" href="segmentation.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>Segmentation</span>
                    </a>
                </li>
                <li>
                    <a class="" href="clustering.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>Clustering Queries by pattern</span>
                    </a>
                </li>
                <li>
                    <a class="" href="analysis.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>Web log analysis </span>
                    </a>
                </li>
                <li>
                    <a class="" href="userquery.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>Analyse User Queries </span>
                    </a>
                </li>
            </ul>            </div>
        <!-- sidebar menu end-->
    </div>
</aside>
<!--sidebar end-->
<!--main content start-->
<section id="main-content">
<section class="wrapper">
<div class="form-group">
<br/><br/>
                       <div class="col-lg-6" style="float: none;">
                            <div class="input-group m-bot15">
                                <input type="text" class="form-control"  id="searchtext" value=" " style="color:black">
                                              <span class="input-group-btn">
                                                <button class="btn btn-success" id="goo" type="button">Go!</button>
                                              </span>&nbsp;&nbsp;
                                          <button type="button" id="txt" class="btn btn-round btn-warning" style=" margin-top: -27px;">Last Page Visited TIme</button>
                            </div>
                            
<!--                             <center> -->
                            
<!--                             <ul class="clock-category"> -->
<!--                                 <a href="#"> -->
<!--                                     <i class=" ico-clock2 "></i> -->
<!--                                     <span id="txt">Timer</span> -->
<!--                                 </a> -->
<!--                             </li> -->
<!--                         </ul> -->
<!--                         </center> -->
                        </div>
                        <div class="col-md-12">
                <section class="panel">
                    <header class="panel-heading">
                        Filter Results
                    </header>
                    <div class="panel-body">
                        <div class="btn-group btn-group-justified">
                            <a class="btn btn-success" href="#" id="webs">Web</a>
                            <a class="btn btn-info" href="#" id="image">Images</a>
                            <a class="btn btn-danger" href="#">News</a>
                        </div>
                    </div>
                </section>

            </div>
                    </div>
                    <div id="filters" style="display: block;color: black;font-family: inherit;font-weight: 200;font-size: 15px;">
<!--                     <div class="col-lg-12" > -->
<!--                     <section class="panel"> -->
<!--                         <div class="panel-body">The packet delivery or data transmission in MANET is done via Wireless Channel regardless of any third party agent at the center of the network to monitor the transmission. In this case, the network becomes vulnerable to attacks. </div> -->
<!--                     </section> -->
<!--                 </div> -->
<!--                 <div class="col-lg-12"> -->
<!--                     <section class="panel"> -->
<!--                         <div class="panel-body">Each node employs a trust threshold to determine whether or not to trust another node. Each node’s decision making using the given trust threshold affects performance and security of CTPKM. The result is shown on the simulation using Network Simulator. </div> -->
<!--                     </section> -->
<!--                 </div> -->
<!--                 <div class="col-lg-12"> -->
<!--                     <section class="panel"> -->
<!--                         <div class="panel-body">A trust-based system combined with key management is proposed in this project in order to provide the secured data transmission.</div> -->
<!--                     </section> -->
<!--                 </div> -->
<!--                  <div class="col-lg-12"> -->
<!--                     <section class="panel"> -->
<!--                         <div class="panel-body">In the proposed system, a new mechanism is triggered in order to addresses the communications between two nodes which needs to exchange confidential information between them using public/private key pairs.  </div> -->
<!--                     </section> -->
<!--                 </div> -->
<!--                  <div class="col-lg-12"> -->
<!--                     <section class="panel"> -->
<!--                         <div class="panel-body">A node updates its public/private key pair when the expiration time is reached or the key pair should be updated due to the compromise of a current private key.</div> -->
<!--                     </section> -->
<!--                 </div> -->
                </div>
                <div id="images" style="display:none">
                <div class="col-sm-12">
                <section class="panel">
                    
                    <div class="panel-body">

                        <div id="gallery" class="media-gal isotope" style="position: relative; overflow: hidden; height: 784.078125px;">
                            <div class="images item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image1.jpg" alt="">
                                    </a>
                                <p>img01.jpg </p>
                            </div>

                            <div class="audio item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(244px, 0px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image2.jpg" alt="">
                                    </a>
                                <p>img02.jpg </p>
                            </div>

                            <div class="video item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(489px, 0px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image3.jpg" alt="">
                                    </a>
                                <p>img03.jpg </p>
                            </div>

                            <div class="images audio item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(733px, 0px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image4.jpg" alt="">
                                    </a>
                                <p>img04.jpg </p>
                            </div>

                            <div class="images documents item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 261px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image5.jpg" alt="">
                                    </a>
                                <p>img05.jpg </p>
                            </div>

                            <div class="audio item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(244px, 261px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image1.jpg" alt="">
                                    </a>
                                <p>img01.jpg </p>
                            </div>

                            <div class="documents item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(489px, 261px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image2.jpg" alt="">
                                </a>
                                <p>img02.jpg </p>
                            </div>
                            <div class="video item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(733px, 261px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image3.jpg" alt="">
                                </a>
                                <p>img03.jpg </p>
                            </div>

                            <div class="images item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 523px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                <img src="images/gallery/image4.jpg" alt="">
                                </a>
                                <p>img04.jpg </p>
                            </div>

                            <div class="documents item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(244px, 523px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                    <img src="images/gallery/image5.jpg" alt="">
                                </a>
                                <p>img05.jpg </p>
                            </div>

                            <div class="video item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(489px, 523px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                    <img src="images/gallery/image1.jpg" alt="">
                                </a>
                                <p>img01.jpg </p>
                            </div>

                            <div class="audio images item  isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(733px, 523px, 0px);">
                                <a href="#myModal" data-toggle="modal">
                                    <img src="images/gallery/image2.jpg" alt="">
                                </a>
                                <p>img02.jpg </p>
                            </div>

                        </div>
</div>
                        <!-- Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <center>
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 class="modal-title">View Image</h4>
                                    </div>

                                    <div class="modal-body row">

                                        <div class="col-md-5 img-modal" style="float: none;">
                                            <img src="images/gallery/image1.jpg" alt="">

                                            <p class="mtop10"><strong>File Name:</strong> img01.jpg</p>
                                            <p><strong>File Type:</strong> jpg</p>
                                            <p><strong>Resolution:</strong> 300x200</p>
                                            <p><strong>Uploaded By:</strong> <a href="#">ThemeBucket</a></p>
                                        </div>
                                    </div>
                                </div>
                                </center>
                            </div>
                        </div>
                         <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal-1" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">Ã</button>
                                        <h4 class="modal-title">Admin Authentication</h4>
                                    </div>
                                    <div class="modal-body">

                                        <form class="form-horizontal" role="form">
                                            <div class="form-group">
                                                <label for="inputEmail1" class="col-lg-2 col-sm-2 control-label">Email</label>
                                                <div class="col-lg-10">
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword1" class="col-lg-2 col-sm-2 control-label">Password</label>
                                                <div class="col-lg-10">
                                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-lg-offset-2 col-lg-10">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox"> Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-lg-offset-2 col-lg-10">
                                                    <button type="submit" class="btn btn-default"><a href="weblog.jsp">Sign in</a></button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- modal -->

                    </div>
                </section>
            </div>
</section>
</section>
</section>
<script src="js/jquery.js"></script>
<script src="js/jquery-ui/jquery-ui-1.10.1.custom.min.js"></script>
<script src="bs3/js/bootstrap.min.js"></script>
<script src="js/jquery.dcjqaccordion.2.7.js"></script>
<script src="js/jquery.scrollTo.min.js"></script>
<script src="js/jQuery-slimScroll-1.3.0/jquery.slimscroll.js"></script>
<script src="js/jquery.nicescroll.js"></script>
<script src="js/skycons/skycons.js"></script>
<script src="js/jquery.scrollTo/jquery.scrollTo.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="js/calendar/clndr.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
<script src="js/calendar/moment-2.2.1.js"></script>
<script src="js/evnt.calendar.init.js"></script>
<script src="js/jvector-map/jquery-jvectormap-1.2.2.min.js"></script>
<script src="js/jvector-map/jquery-jvectormap-us-lcc-en.js"></script>
<script src="js/gauge/gauge.js"></script>
<script src="js/css3clock/js/css3clock.js"></script>
<script src="js/easypiechart/jquery.easypiechart.js"></script>
<script src="js/sparkline/jquery.sparkline.js"></script>
<script src="js/morris-chart/morris.js"></script>
<script src="js/morris-chart/raphael-min.js"></script>
<script src="js/flot-chart/jquery.flot.js"></script>
<script src="js/flot-chart/jquery.flot.tooltip.min.js"></script>
<script src="js/flot-chart/jquery.flot.resize.js"></script>
<script src="js/flot-chart/jquery.flot.pie.resize.js"></script>
<script src="js/flot-chart/jquery.flot.animator.min.js"></script>
<script src="js/flot-chart/jquery.flot.growraf.js"></script>
<script src="js/dashboard.js"></script>
<script src="js/jquery.customSelect.min.js" ></script>
<script src="js/scripts.js"></script>
<script src="js/actions.js"></script>
<script> 
var searchresults = document.URL.split('?')[1];
var res = searchresults.replace(/%20/g, " ");
$('#searchtext').val(res);
$('#goo').trigger('click');
</script>
</body>
</html>