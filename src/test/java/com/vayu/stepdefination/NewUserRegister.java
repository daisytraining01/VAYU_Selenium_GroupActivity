package com.vayu.stepdefination;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import com.vayu.action.ActionClass;
import com.vayu.helper.ExcelReadNewUserRegister;
import com.vayu.pageobject.RegisterPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class NewUserRegister  {
	static WebDriver driver;
	ActionClass actionObj;
	static RegisterPage pageFactory;
	
	public NewUserRegister(ActionClass actionObj){
		driver = actionObj.getDriver();
		this.actionObj=actionObj;
	}
	
	@Given("^navigates to the RegisterPage$")
	public void navigates_to_the_RegisterPage() {
		driver.get("http://demo.guru99.com/test/newtours/register.php");
	}
	
	@When("^User enters valid data$")
	public void user_enters_valid_data() {
		
		pageFactory = new RegisterPage(driver);
		actionObj.TextInput(pageFactory.firstName, "Vimal");
		actionObj.TextInput(pageFactory.lastName, "Raj");
		actionObj.TextInput(pageFactory.email, "dummy@gm.com");
		actionObj.TextInput(pageFactory.address, "DLF");
		actionObj.TextInput(pageFactory.city, "Chennai");
		actionObj.TextInput(pageFactory.phone, "9876543219");
		actionObj.TextInput(pageFactory.postalCode, "678906");
		actionObj.TextInput(pageFactory.state, "Tamil Nadu");
		String str = "AdminLogin" + 1;
		actionObj.TextInput(pageFactory.userName, str);
		actionObj.TextInput(pageFactory.password, str);
		actionObj.TextInput(pageFactory.confirmPassword, str);
		actionObj.selectDropdowValue(pageFactory.country, "INDIA");
		actionObj.implicitWait(2);
		actionObj.Click(pageFactory.registerButton);
	}

	@Then("^User is successfully logged into the system$")
	public void user_is_successfully_logged_into_the_system() throws Exception {

		String str = actionObj.GetText(pageFactory.signInLink);
		actionObj.takeScreenShot();
		Assert.assertEquals(str, "sign-in", "Registeration Failed!");
	}

	@Then("^User successfully logout from the application$")
	public void user_successfully_logout_from_the_application() {

		actionObj.Click(pageFactory.signOff);
	}
	
	@When("^User enters valid data from excel$")
	public void user_enters_valid_data_from_excel() throws FileNotFoundException, InterruptedException  {
		ExcelReadNewUserRegister obj =new ExcelReadNewUserRegister(driver);
		try {
			obj.readExcel(driver, "NewTours.xlsx", "Register", 2);
			Thread.sleep(1000);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
