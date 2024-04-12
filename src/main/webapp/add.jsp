<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="org.hibernate.*,org.hibernate.cfg.*" %>
<%@page import="com.model.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 <%
 
 
 SessionFactory sf= new Configuration().configure().buildSessionFactory();
 
 Session s= sf.openSession();
 
 Transaction t=s.beginTransaction();
 login d= new login();
 d.setUsername(request.getParameter("username"));
 d.setEmail(request.getParameter("email"));
 d.setPassword(request.getParameter("password"));
 s.save(d);
 t.commit();
 

 response.sendRedirect("Consent.html");
 
 %>
 

</body>
</html>