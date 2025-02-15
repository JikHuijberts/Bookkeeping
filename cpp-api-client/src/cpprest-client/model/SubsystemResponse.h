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

/*
 * SubsystemResponse.h
 *
 * Response containing a single subsystem.
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_SubsystemResponse_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_SubsystemResponse_H_


#include "ModelBase.h"

#include "model/Subsystem.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {


/// <summary>
/// Response containing a single subsystem.
/// </summary>
class  SubsystemResponse
    : public ModelBase
{
public:
    SubsystemResponse();
    virtual ~SubsystemResponse();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// SubsystemResponse members

    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<Subsystem> getData() const;
    bool dataIsSet() const;
    void unsetData();

    void setData(const std::shared_ptr<Subsystem>& value);


protected:
    std::shared_ptr<Subsystem> m_Data;
    bool m_DataIsSet;
};


}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_SubsystemResponse_H_ */
