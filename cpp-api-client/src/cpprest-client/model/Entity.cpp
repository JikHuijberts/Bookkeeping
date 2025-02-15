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



#include "Entity.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {




Entity::Entity()
{
    m_CreatedAt = 0L;
    m_CreatedAtIsSet = false;
    m_Id = 0L;
    m_IdIsSet = false;
    m_UpdatedAt = 0L;
    m_UpdatedAtIsSet = false;
}

Entity::~Entity()
{
}

void Entity::validate()
{
    // TODO: implement validation
}

web::json::value Entity::toJson() const
{

    web::json::value val = web::json::value::object();
    
    if(m_CreatedAtIsSet)
    {
        val[utility::conversions::to_string_t(U("createdAt"))] = ModelBase::toJson(m_CreatedAt);
    }
    if(m_IdIsSet)
    {
        val[utility::conversions::to_string_t(U("id"))] = ModelBase::toJson(m_Id);
    }
    if(m_UpdatedAtIsSet)
    {
        val[utility::conversions::to_string_t(U("updatedAt"))] = ModelBase::toJson(m_UpdatedAt);
    }

    return val;
}

bool Entity::fromJson(const web::json::value& val)
{
    bool ok = true;
    
    if(val.has_field(utility::conversions::to_string_t(U("createdAt"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("createdAt")));
        if(!fieldValue.is_null())
        {
            int64_t refVal_createdAt;
            ok &= ModelBase::fromJson(fieldValue, refVal_createdAt);
            setCreatedAt(refVal_createdAt);
        }
    }
    if(val.has_field(utility::conversions::to_string_t(U("id"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("id")));
        if(!fieldValue.is_null())
        {
            int64_t refVal_id;
            ok &= ModelBase::fromJson(fieldValue, refVal_id);
            setId(refVal_id);
        }
    }
    if(val.has_field(utility::conversions::to_string_t(U("updatedAt"))))
    {
        const web::json::value& fieldValue = val.at(utility::conversions::to_string_t(U("updatedAt")));
        if(!fieldValue.is_null())
        {
            int64_t refVal_updatedAt;
            ok &= ModelBase::fromJson(fieldValue, refVal_updatedAt);
            setUpdatedAt(refVal_updatedAt);
        }
    }
    return ok;
}

void Entity::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t(U(".")))
    {
        namePrefix += utility::conversions::to_string_t(U("."));
    }
    if(m_CreatedAtIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("createdAt")), m_CreatedAt));
    }
    if(m_IdIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("id")), m_Id));
    }
    if(m_UpdatedAtIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t(U("updatedAt")), m_UpdatedAt));
    }
}

bool Entity::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    bool ok = true;
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t(U(".")))
    {
        namePrefix += utility::conversions::to_string_t(U("."));
    }

    if(multipart->hasContent(utility::conversions::to_string_t(U("createdAt"))))
    {
        int64_t refVal_createdAt;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("createdAt"))), refVal_createdAt );
        setCreatedAt(refVal_createdAt);
    }
    if(multipart->hasContent(utility::conversions::to_string_t(U("id"))))
    {
        int64_t refVal_id;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("id"))), refVal_id );
        setId(refVal_id);
    }
    if(multipart->hasContent(utility::conversions::to_string_t(U("updatedAt"))))
    {
        int64_t refVal_updatedAt;
        ok &= ModelBase::fromHttpContent(multipart->getContent(utility::conversions::to_string_t(U("updatedAt"))), refVal_updatedAt );
        setUpdatedAt(refVal_updatedAt);
    }
    return ok;
}

int64_t Entity::getCreatedAt() const
{
    return m_CreatedAt;
}

void Entity::setCreatedAt(int64_t value)
{
    m_CreatedAt = value;
    m_CreatedAtIsSet = true;
}

bool Entity::createdAtIsSet() const
{
    return m_CreatedAtIsSet;
}

void Entity::unsetCreatedAt()
{
    m_CreatedAtIsSet = false;
}
int64_t Entity::getId() const
{
    return m_Id;
}

void Entity::setId(int64_t value)
{
    m_Id = value;
    m_IdIsSet = true;
}

bool Entity::idIsSet() const
{
    return m_IdIsSet;
}

void Entity::unsetId()
{
    m_IdIsSet = false;
}
int64_t Entity::getUpdatedAt() const
{
    return m_UpdatedAt;
}

void Entity::setUpdatedAt(int64_t value)
{
    m_UpdatedAt = value;
    m_UpdatedAtIsSet = true;
}

bool Entity::updatedAtIsSet() const
{
    return m_UpdatedAtIsSet;
}

void Entity::unsetUpdatedAt()
{
    m_UpdatedAtIsSet = false;
}
}
}
}
}


