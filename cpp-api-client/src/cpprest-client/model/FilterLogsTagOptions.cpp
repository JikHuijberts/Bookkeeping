/**
 * ALICE Bookkeeping
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 5.4.0.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



#include "FilterLogsTagOptions.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {




FilterLogsTagOptions::FilterLogsTagOptions()
{
    m_Operation = utility::conversions::to_string_t("");
    m_OperationIsSet = false;
    m_Values = utility::conversions::to_string_t("");
    m_ValuesIsSet = false;
}

FilterLogsTagOptions::~FilterLogsTagOptions()
{
}

void FilterLogsTagOptions::validate()
{
    // TODO: implement validation
}

web::json::value FilterLogsTagOptions::toJson() const
{

    web::json::value val = web::json::value::object();
    
    if(m_OperationIsSet)
    {
        val[utility::conversions::to_string_t(U("operation"))] = ModelBase::toJson(m_Operation);
    }
    if(m_ValuesIsSet)
    {
        val[utility::conversions::to_string_t(U("values"))] = ModelBase::toJson(m_Values);
    }

    return val;
}

bool FilterLogsTagOptions::fromJson(const web::json::value& val)
{
    bool ok = true;
    
    if(val.has_field(utility::conversions::to_string_t(U("operation"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("operation")));
        if(!fieldValue.is_null())
        {
            utility::string_t refVal_operation;
            ok &= ModelBase::fromJson(fieldValue, refVal_operation);
            setOperation(refVal_operation);
        }
    }
    if(val.has_field(utility::conversions::to_string_t(U("values"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("values")));
        if(!fieldValue.is_null())
        {
            utility::string_t refVal_values;
            ok &= ModelBase::fromJson(fieldValue, refVal_values);
            setValues(refVal_values);
        }
    }
    return ok;
}

void FilterLogsTagOptions::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t(U(".")))
    {
        namePrefix += utility::conversions::to_string_t(U("."));
    }
    if(m_OperationIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("operation")), m_Operation));
    }
    if(m_ValuesIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("values")), m_Values));
    }
}

bool FilterLogsTagOptions::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    bool ok = true;
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t(U(".")))
    {
        namePrefix += utility::conversions::to_string_t(U("."));
    }

    if(multipart->hasContent(utility::conversions::to_string_t(U("operation"))))
    {
        utility::string_t refVal_operation;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("operation"))), refVal_operation );
        setOperation(refVal_operation);
    }
    if(multipart->hasContent(utility::conversions::to_string_t(U("values"))))
    {
        utility::string_t refVal_values;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("values"))), refVal_values );
        setValues(refVal_values);
    }
    return ok;
}

utility::string_t FilterLogsTagOptions::getOperation() const
{
    return m_Operation;
}

void FilterLogsTagOptions::setOperation(const utility::string_t& value)
{
    m_Operation = value;
    m_OperationIsSet = true;
}

bool FilterLogsTagOptions::operationIsSet() const
{
    return m_OperationIsSet;
}

void FilterLogsTagOptions::unsetOperation()
{
    m_OperationIsSet = false;
}
utility::string_t FilterLogsTagOptions::getValues() const
{
    return m_Values;
}

void FilterLogsTagOptions::setValues(const utility::string_t& value)
{
    m_Values = value;
    m_ValuesIsSet = true;
}

bool FilterLogsTagOptions::valuesIsSet() const
{
    return m_ValuesIsSet;
}

void FilterLogsTagOptions::unsetValues()
{
    m_ValuesIsSet = false;
}
}
}
}
}


