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
 payments d= new payments();
 d.setCard_number(request.getParameter("card_number"));
 d.setExpiry_date(request.getParameter("expiry_date"));
 d.setCvv(request.getParameter("cvv"));
 d.setCard_holder(request.getParameter("card_holder"));
 s.save(d);
 t.commit();
 

 response.sendRedirect("succes_payment.html");
 
 %>
 

</body>
</html>