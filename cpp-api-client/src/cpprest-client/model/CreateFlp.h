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

/*
 * CreateFlp.h
 *
 * Describes an flp
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_CreateFlp_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_CreateFlp_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace org {
namespace openapitools {
namespace client {
namespace model {


/// <summary>
/// Describes an flp
/// </summary>
class  CreateFlp
    : public ModelBase
{
public:
    CreateFlp();
    virtual ~CreateFlp();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// CreateFlp members

    /// <summary>
    /// FLP name.
    /// </summary>
    utility::string_t getName() const;
    bool nameIsSet() const;
    void unsetName();

    void setName(const utility::string_t& value);

    /// <summary>
    /// FLP hostname.
    /// </summary>
    utility::string_t getHostname() const;
    bool hostnameIsSet() const;
    void unsetHostname();

    void setHostname(const utility::string_t& value);

    /// <summary>
    /// The unique identifier of this entity.
    /// </summary>
    int32_t getRunNumber() const;
    bool runNumberIsSet() const;
    void unsetRunNumber();

    void setRunNumber(int32_t value);


protected:
    utility::string_t m_Name;
    bool m_NameIsSet;
    utility::string_t m_Hostname;
    bool m_HostnameIsSet;
    int32_t m_RunNumber;
    bool m_RunNumberIsSet;
};


}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_CreateFlp_H_ */