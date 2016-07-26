<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>

<div data-name="saved-list" class="sl-snippet sl-list-wrapper col-sm-6 col-md-4">
	<div class="sl-saved-list panel">
		<div class="panel-heading">
			
		</div>
		<div class="panel-body">
			List Items:
		</div>

		<table class="table table-condensed">
			<tr class="sl-wait-sign">
				<td>
					<p class="text-center">
						<i class="fa fa-refresh fa-spin fa-2x"></i>
					</p>
				</td>
			</tr>
		</table>
		<button type="button" class="btn btn-primary btn-sm btn-block buy-list-btn">Buy</button>

		<div class="panel-footer">
			<a href="${app }/lists/">/lists/</a>
		</div>
	</div>
</div>