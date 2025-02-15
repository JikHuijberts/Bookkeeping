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



#include "StatusInformation.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {




StatusInformation::StatusInformation()
{
    m_DataIsSet = false;
    m_StatusIsSet = false;
}

StatusInformation::~StatusInformation()
{
}

void StatusInformation::validate()
{
    // TODO: implement validation
}

web::json::value StatusInformation::toJson() const
{

    web::json::value val = web::json::value::object();
    
    if(m_DataIsSet)
    {
        val[utility::conversions::to_string_t(U("data"))] = ModelBase::toJson(m_Data);
    }
    if(m_StatusIsSet)
    {
        val[utility::conversions::to_string_t(U("status"))] = ModelBase::toJson(m_Status);
    }

    return val;
}

bool StatusInformation::fromJson(const web::json::value& val)
{
    bool ok = true;
    
    if(val.has_field(utility::conversions::to_string_t(U("data"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("data")));
        if(!fieldValue.is_null())
        {
            std::shared_ptr<StatusDataResponse> refVal_data;
            ok &= ModelBase::fromJson(fieldValue, refVal_data);
            setData(refVal_data);
        }
    }
    if(val.has_field(utility::conversions::to_string_t(U("status"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("status")));
        if(!fieldValue.is_null())
        {
            std::shared_ptr<StatusResponse> refVal_status;
            ok &= ModelBase::fromJson(fieldValue, refVal_status);
            setStatus(refVal_status);
        }
    }
    return ok;
}

void StatusInformation::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t(U(".")))
    {
        namePrefix += utility::conversions::to_string_t(U("."));
    }
    if(m_DataIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("data")), m_Data));
    }
    if(m_StatusIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("status")), m_Status));
    }
}

bool StatusInformation::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    bool ok = true;
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t(U(".")))
    {
        namePrefix += utility::conversions::to_string_t(U("."));
    }

    if(multipart->hasContent(utility::conversions::to_string_t(U("data"))))
    {
        std::shared_ptr<StatusDataResponse> refVal_data;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("data"))), refVal_data );
        setData(refVal_data);
    }
    if(multipart->hasContent(utility::conversions::to_string_t(U("status"))))
    {
        std::shared_ptr<StatusResponse> refVal_status;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("status"))), refVal_status );
        setStatus(refVal_status);
    }
    return ok;
}

std::shared_ptr<StatusDataResponse> StatusInformation::getData() const
{
    return m_Data;
}

void StatusInformation::setData(const std::shared_ptr<StatusDataResponse>& value)
{
    m_Data = value;
    m_DataIsSet = true;
}

bool StatusInformation::dataIsSet() const
{
    return m_DataIsSet;
}

void StatusInformation::unsetData()
{
    m_DataIsSet = false;
}
std::shared_ptr<StatusResponse> StatusInformation::getStatus() const
{
    return m_Status;
}

void StatusInformation::setStatus(const std::shared_ptr<StatusResponse>& value)
{
    m_Status = value;
    m_StatusIsSet = true;
}

bool StatusInformation::statusIsSet() const
{
    return m_StatusIsSet;
}

void StatusInformation::unsetStatus()
{
    m_StatusIsSet = false;
}
}
}
}
}


