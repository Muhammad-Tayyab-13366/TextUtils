Access Redirect 
<cfif session.member_id eq 0>
  <cflocation url="/members/index.cfm">
</cfif>

<cfif session.sec_list neq 100103>
    You do not have access to this page.
    <cfabort>
</cfif>


Access Roles
100103 his highest level
100105 is trader access
100101 is marketing access
100107 is customer access
Hierarchy of Pages
Industry Page
http://localhost:8080/admin/_marketing/_industry/_edit.cfm?industry_id=254 
Enterprise Page
 http://localhost:8080/admin/_proc/_company/_edit.cfm?cid=276188 
Business Units Page
http://localhost:8080/admin/_proc/_company/project_detail.cfm?project_id=83460 
Individuals Page
http://localhost:8080/admin/_user/_edit.cfm?user_id=12664432
Region Page
 http://localhost:8080/admin/_marketing/_region/_edit.cfm?region_id=S1056&industry_id=1
Category Page
 http://localhost:8080/admin/_marketing/_category/_edit.cfm?category_id=1295 


Alert Message	
<div id="flash_message"><span class="regularred" style="font-size:18px;">Your login information does not match any we have on file.</span></div>



select top 5 * from buyer
select top 5 * from seller
select top 5 * from member
select top 5 * from _user


select top 5 * from industry
select top 5 * from company
select top 5 * from project
select top 5 * from category
select top 5 * from project_category_rel


select top 5 * from user_cat_purchase
select top 5 * from user_cat_bid
select top 5 * from auction


select top 5 * from rel_assoc




