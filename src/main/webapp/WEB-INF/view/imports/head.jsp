<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<title>${pageTitle}</title>
<link rel="stylesheet" href="${app }/res/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="${app }/res/fa/css/font-awesome.css">
<link rel="stylesheet" href="${app }/res/adminlte/css/AdminLTE.css">
<link rel="stylesheet" href="${app }/res/adminlte/css/skins/_all-skins.css">
<link rel="stylesheet" href="${app }/res/shoplist/css/fix.css">
<link rel="stylesheet" href="${app }/res/shoplist/css/skins-fix.css">