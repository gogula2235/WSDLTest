console.log("this is my test cdn");

document.write("<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions name="LoggerService"
	targetNamespace="http://example.bank.skjolber.github.com/v1" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
	xmlns:e="http://example.bank.skjolber.github.com/v1"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/">
	<wsdl:types>
		<xsd:schema>
			<xsd:import namespace="http://example.bank.skjolber.github.com/v1" schemaLocation="BankCustomerService.xsd" />
		</xsd:schema>
	</wsdl:types>

	<!-- Messages -->

	<wsdl:message name="getAccountsRequest">
		<wsdl:part name="parameters" element="e:getAccountsRequest" />
	</wsdl:message>
	<wsdl:message name="getAccountsResponse">
		<wsdl:part name="parameters" element="e:getAccountsResponse" />
	</wsdl:message>

	<wsdl:message name="bankException">
		<wsdl:part name="fault" element="e:bankException" />
	</wsdl:message>

	<wsdl:message name="customerException">
		<wsdl:part name="fault" type="e:customerException" />
	</wsdl:message>

	<wsdl:message name="bankHeader">
		<wsdl:part element="e:bankRequestHeader" name="bankHeader"/>
	</wsdl:message>

	<!-- Port types -->

	<wsdl:portType name="BankCustomerServicePortType">
		<wsdl:operation name="getAccounts">
			<wsdl:input message="e:getAccountsRequest" />
			<wsdl:output message="e:getAccountsResponse" />
			<wsdl:fault name="bankException" message="e:bankException"/>
			<wsdl:fault name="customerException" message="e:customerException"/>
		</wsdl:operation>
	</wsdl:portType>

	<!-- Bindings -->

	<wsdl:binding name="BankCustomerServiceBinding" type="e:BankCustomerServicePortType">
		<soap:binding style="document"
			transport="http://schemas.xmlsoap.org/soap/http" />
		<wsdl:operation name="getAccounts">
			<soap:operation soapAction="" style="document" />
			<wsdl:input>
				<soap:header message="e:bankHeader" part="bankHeader" use="literal"/>
				<soap:body use="literal" />
			</wsdl:input>
			<wsdl:output>
				<soap:body use="literal" />
			</wsdl:output>
			<wsdl:fault name="bankException">
				<soap:fault name="bankException" use="literal"/>
			</wsdl:fault>
		</wsdl:operation>
	</wsdl:binding>

	<!-- Services -->

	<wsdl:service name="BankCustomerService">
		<wsdl:port name="BankCustomerServicePort" binding="e:BankCustomerServiceBinding">
			<soap:address location="http://localhost:50000/services/bankCustomer" />
		</wsdl:port>
	</wsdl:service>
</wsdl:definitions>");
