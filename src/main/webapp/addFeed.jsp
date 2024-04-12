<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="org.hibernate.*,org.hibernate.cfg.*" %>
<%@page import="com.model.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<style>
 nav {
        	padding: 0 24px !important;
            background-color: #E8E8E8;
        }
        .nav-item.nav-link{
        	font-size:18px;
        	color: #454545 !important;
        }
       .nav-item.nav-link:hover,
        .nav-item.nav-link.active{
        	color: #e44e4e !important;
        }
         .nav-item.nav-link.active:after{
         	    content: " ";
			    display: block;
			    width: 100%;
			    height: 3px;
			    background-color: #e44e4e;
			    position: absolute;
			    top: 49px;
			    left: 0;
         }   
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        li {
            float: left;
        }
        
        li a {
            display: block;
            color: black;
            text-align: center;
            padding: 7px 19px;
            text-decoration: none;
            font-family: cursive;
            font-size: 29px;
        }
        
        li a:hover {
            background-color: #555;
        }

        /* CSS for logo */
        .navbar-brand img {
            width: 50px; /* Adjust the desired width */
            height: 50px; /* Adjust the desired height */
            border-radius: 50%; /* Creates a circular shape */
            margin-right: 10px; /* Add spacing between logo and text */
        }
       
        .results_box {
            background: rgb(245,245,245);
            border-radius: 12px;
            box-shadow: 0px 0px 10px rgba(0,0,0,.1);
            padding: 25px 50px;
            width: 500px;
            margin: 20px auto;
            font-size: .95rem;
		}

.feedback-container{
	display: flex;
	width: 500px;
	flex-direction: column;
    align-items: center;
	margin: 50px auto;
	border:0;
	border-radius: 24px;
	background-color: #c7c7c7;
	padding: 30px;
}
.feedback-svg{
	width: 400px;
}
p{
	margin:0;
	font-size: 20px;
}

</style>
</head>
<body>
	<nav class="page-navbar navbar navbar-expand-lg navbar-light">
	  <a class="navbar-brand" href="#"><img src="LOGO.jpg" alt="Logo">BLENDin OR STANDout</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="navbar-menu collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
	    <div class="navbar-nav">
	    	<a class="nav-item nav-link mx-2" href="Question.html">Personality test</a>
	    	<a class="nav-item nav-link mx-2" href="Question.html">Result</a>
	      	<a class="nav-item nav-link" href="index.html">Logout</a>
	    </div>
	  </div>
	</nav> 
<%
SessionFactory sf= new Configuration().configure().buildSessionFactory();
Session s= sf.openSession();
Transaction t=s.beginTransaction();
Feedback d= new Feedback();
d.setUsername(request.getParameter("username"));
d.setEmail(request.getParameter("email"));
d.setComment(request.getParameter("comment"));
s.save(d);
t.commit();
%> 
<div class="feedback-container">
	<img src="feedback_svg.png" alt="Feed submitted" class="feedback-svg">
	<p><%out.println("Feedback submitted successfully"); %></p>
</div>
</body>
</html>

