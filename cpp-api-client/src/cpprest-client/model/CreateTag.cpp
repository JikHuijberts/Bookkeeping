/**
 * ALICE Bookkeeping
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 5.0.0-beta2.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



#include "CreateTag.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {




CreateTag::CreateTag()
{
    m_Text = utility::conversions::to_string_t("");
    m_TextIsSet = false;
}

CreateTag::~CreateTag()
{
}

void CreateTag::validate()
{
    // TODO: implement validation
}

web::json::value CreateTag::toJson() const
{

    web::json::value val = web::json::value::object();
    
    if(m_TextIsSet)
    {
        val[utility::conversions::to_string_t("text")] = ModelBase::toJson(m_Text);
    }

    return val;
}

bool CreateTag::fromJson(const web::json::value& val)
{
    bool ok = true;
    
    if(val.has_field(utility::conversions::to_string_t("text")))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t("text"));
        if(!fieldValue.is_null())
        {
            utility::string_t refVal_text;
            ok &= ModelBase::fromJson(fieldValue, refVal_text);
            setText(refVal_text);
        }
    }
    return ok;
}

void CreateTag::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }
    if(m_TextIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("text"), m_Text));
    }
}

bool CreateTag::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    bool ok = true;
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("text")))
    {
        utility::string_t refVal_text;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t("text")), refVal_text );
        setText(refVal_text);
    }
    return ok;
}

utility::string_t CreateTag::getText() const
{
    return m_Text;
}

void CreateTag::setText(const utility::string_t& value)
{
    m_Text = value;
    m_TextIsSet = true;
}

bool CreateTag::textIsSet() const
{
    return m_TextIsSet;
}

void CreateTag::unsetText()
{
    m_TextIsSet = false;
}
}
}
}
}


