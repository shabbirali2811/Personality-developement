<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="org.hibernate.*, org.hibernate.cfg.*" %>
<%@page import="com.model.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="css/style.css">
<style>
	.back-to-login{
		width: 30%;
	    background-color: #c7c7c7;
	    border-radius: 4px;
	    margin: 100px auto;
	    padding: 20px;
	}
	p{
		margin: 10px 0;
	}
	.login-redirect-btn{
		padding:10px;
		border-radius:4px;
		border: 0;
		background-color: #007bff;
		color: white;
		margin-bottom:0;
	}
</style>
</head>
<body>
<div class="back-to-login">
<%
SessionFactory sf=new Configuration().configure().buildSessionFactory();
Session s=sf.openSession();
Transaction t=s.beginTransaction();
String username=request.getParameter("username");
String password=request.getParameter("password");

login l=s.get(login.class,username);

if(l!=null){
	if(l.getPassword().equals(password)){
		 response.sendRedirect("Consent.html");
	}
	else{
		out.print("Wrong password!!!");		
	}
}
else{
	out.print("Login data not found!!");
	
}
s.close();
sf.close();
%>

<p>Go back to login ?</p>
<button type="button" class="login-redirect-btn" onclick="window.location.href='index1.html';">Login</button>
</div>
</body>
</html>