<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>

<table>
<tr data-name="saved-product" class="sl-snippet sl-saved-product">
	<td class="col-xs-10 sl-product-name"></td>
	<td class="col-xs-2 sl-product-actions">
		<button class="btn sl-product-status-btn" type="button"><i class="fa"></i></button>
	</td>
</tr>
</table>