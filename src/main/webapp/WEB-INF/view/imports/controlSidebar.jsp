<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<ul class="nav nav-tabs nav-justified control-sidebar-tabs">
	<li class="active">
		<a href="#control-sidebar-layout-tab" data-toggle="tab">
			<i class="fa fa-picture-o"></i>
		</a>
	</li>
	
	<li>
		<a href="#control-sidebar-settings-tab" data-toggle="tab">
			<i class="fa fa-cog"></i>
		</a>
	</li>
</ul>

<div class="tab-content">
	<div class="tab-pane active" id="control-sidebar-layout-tab">
		<h4 class="control-sidebar-heading">Layout Settings</h4>
		<div class="form-group">
			<label class="control-sidebar-subheading">
				<input type="checkbox" data-sidebarskin="toggle" class="pull-right"> 
				Toggle Right Sidebar Skin
			</label>
			<p>Toggle between dark and light skins for the right sidebar</p>
		</div>
		<h4 class="control-sidebar-heading">Skins</h4>
		<!--  -->
		<ul class="skin-list clearfix">
			<li>
				<a href="#" data-skin="skin-blue" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-light-blue-logo"></span>
						<span class="skin-header bg-light-blue"></span>
					</div>
					<div>
						<span class="skin-sidebar"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Blue</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-black" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo"></span>
						<span class="skin-header"></span>
					</div>
					<div>
						<span class="skin-sidebar"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Black</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-purple" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-purple-active"></span>
						<span class="skin-header bg-purple"></span>
					</div>
					<div>
						<span class="skin-sidebar"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Purple</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-green" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-green-active"></span>
						<span class="skin-header bg-green"></span>
					</div>
					<div>
						<span class="skin-sidebar"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Green</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-red" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-red-active"></span>
						<span class="skin-header bg-red"></span>
					</div>
					<div>
						<span class="skin-sidebar"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Red</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-yellow" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-yellow-active"></span>
						<span class="skin-header bg-yellow"></span>
					</div>
					<div>
						<span class="skin-sidebar"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Yellow</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-blue-light" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-light-blue-logo"></span>
						<span class="skin-header bg-light-blue"></span>
					</div>
					<div>
						<span class="skin-sidebar light"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Blue Light</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-black-light" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo"></span>
						<span class="skin-header"></span>
					</div>
					<div>
						<span class="skin-sidebar light"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Black Light</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-purple-light" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-purple-active"></span>
						<span class="skin-header bg-purple"></span>
					</div>
					<div>
						<span class="skin-sidebar light"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Purple Light</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-green-light" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-green-active"></span>
						<span class="skin-header bg-green"></span>
					</div>
					<div>
						<span class="skin-sidebar light"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Green Light</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-red-light" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-red-active"></span>
						<span class="skin-header bg-red"></span>
					</div>
					<div>
						<span class="skin-sidebar light"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Red Light</p>
			</li>
			
			<li>
				<a href="#" data-skin="skin-yellow-light" class="clearfix full-opacity-hover">
					<div>
						<span class="skin-logo bg-yellow-active"></span>
						<span class="skin-header bg-yellow"></span>
					</div>
					<div>
						<span class="skin-sidebar light"></span>
						<span class="skin-content"></span>
					</div>
				</a>
				<p class="text-center no-margin">Yellow Light</p>
			</li>
		</ul>
		<!--  -->
	</div>
	
	<div class="tab-pane" id="control-sidebar-settings-tab">
		<h4 class="control-sidebar-heading">Language</h4>
		<div class="input-group">
			<select class="form-control">
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
			<div class="input-group-btn">
				<button type="button" class="btn btn-success">
					<i class="fa fa-check"></i>
				</button>
			</div>
		</div>
	</div>
</div>